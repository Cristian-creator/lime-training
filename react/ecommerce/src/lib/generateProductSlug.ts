// "Iphone 14 PRO" -> "iphone-14-pro"
export const generateProductSlug = (productName: string, productId: number) =>
  productName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-") +
  "-" +
  productId;
