import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateProductSlug } from "@/lib/generateProductSlug";
import { isMobile } from "@/lib/is-mobile";
import {
  handleFacebookShare,
  handleTwitterShare,
  handleWhatsAppShare,
} from "@/lib/social-share";
import { Facebook, Share } from "lucide-react";
import { useState } from "react";

const shareData = {
  title: "Check out this product!",
  text: "Click the link below to access the product page and see many others.",
  url: "https://developer.mozilla.org",
};

interface ShareProductButtonProps {
  id: number;
  name: string;
}

const ShareProductButton: React.FC<ShareProductButtonProps> = ({
  id,
  name,
}) => {
  let [isOpen, setIsOpen] = useState(false);

  const productPageURL =
    window.location.origin + "/products/" + generateProductSlug(name, id); // "http://localhost:5173/products/iphone-14-pro"

  const handleShare = async () => {
    const deviceIsMobile = isMobile();

    // deviceIsMobile === false
    if (!deviceIsMobile) {
      setIsOpen(true);
      return;
    }

    try {
      await navigator.share(shareData);
    } catch (err) {
      setIsOpen(true);
    }
  };

  return (
    <>
      <Button variant="secondary" size="icon" onClick={handleShare}>
        <Share />
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
          </DialogHeader>
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={productPageURL} readOnly />
          </div>
          <div className="flex items-center gap-2">
            <hr className="flex-1" />
            <p>OR</p>
            <hr className="flex-1" />
          </div>
          <div className="flex justify-center gap-2">
            <Button
              variant="ghost"
              onClick={() => handleFacebookShare(productPageURL)}>
              <Facebook />
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                handleWhatsAppShare(productPageURL, shareData.text)
              }>
              <img src="" />
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                handleTwitterShare(productPageURL, shareData.text)
              }>
              <img src="" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShareProductButton;
