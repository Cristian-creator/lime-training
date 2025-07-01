import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/products";
import { ShoppingCart } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import ShareProductButton from "./ShareProductButton";
import { Link } from "react-router";
import { generateProductSlug } from "@/lib/generateProductSlug";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const productPageURL =
    "/products/" + generateProductSlug(product.name, product.id); // "/products/iphone-14-pro"

  return (
    <Card>
      <CardHeader>
        <Link to={productPageURL}>
          <CardTitle>{product.name}</CardTitle>
        </Link>
        <CardAction>
          <ShareProductButton id={product.id} name={product.name} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter>
        <Link to={productPageURL} className="w-full">
          <Button className="w-full">
            <ShoppingCart />
            Buy now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
