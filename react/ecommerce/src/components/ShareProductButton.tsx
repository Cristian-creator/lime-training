import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

const ShareProductButton = () => {
  let [isOpen, setIsOpen] = useState(false);

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
            <Input
              id="link"
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
            />
          </div>
          <div className="flex items-center gap-2">
            <hr className="flex-1" />
            <p>OR</p>
            <hr className="flex-1" />
          </div>
          <div className="flex justify-center gap-2">
            <Button variant="ghost" onClick={() => handleFacebookShare("")}>
              <Facebook />
            </Button>
            <Button variant="ghost" onClick={() => handleWhatsAppShare("")}>
              <img src="" />
            </Button>
            <Button variant="ghost" onClick={() => handleTwitterShare("", "")}>
              <img src="" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShareProductButton;
