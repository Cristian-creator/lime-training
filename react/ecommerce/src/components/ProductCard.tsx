import { Product } from "@/types/products";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Share, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardAction>
          <Button variant="secondary" size="icon">
            <Share />
          </Button>
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
