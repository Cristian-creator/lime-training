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

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardAction>
          <ShareProductButton />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <ShoppingCart />
          Buy now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
