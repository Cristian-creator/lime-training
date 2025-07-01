export const handleFacebookShare = (currentPageURL: string) => {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentPageURL
  )}`;
  window.open(shareUrl, "_blank", "width=600,height=400");
};

export const handleWhatsAppShare = (
  currentPageURL: string,
  text: string = ""
) => {
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(
    `${text} ${currentPageURL}`
  )}`;
  window.open(shareUrl, "_blank", "width=600,height=400");
};

export const handleTwitterShare = (currentPageURL: string, text: string) => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentPageURL
  )}&text=${encodeURIComponent(text)}`;
  window.open(shareUrl, "_blank", "width=600,height=400");
};
