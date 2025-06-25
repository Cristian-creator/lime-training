import { useEffect, useState } from "react";
import { apiClient } from "@/apiClient";
import ProductCard from "@/components/ProductCard";
import { Products } from "@/types/products";

// interface UserAddress {
//   streetName: string;
//   number: number;
//   isVerified: boolean;
// }

// export interface User {
//   name: string;
//   age: number;
//   address: UserAddress | undefined;
// }

// let username: string = "Cristian";
// let age: number = 23;
// let isLoggedIn: boolean = true;

// const greet = (name: string, test: number): string => {
//   return `Hello, ${name}`;
// };

// greet("Cristian", 6);

// const user: User = {
//   name: "Cristian",
//   age: 23,
//   address: undefined,
// };

const ProductsPage = () => {
  const [products, setProducts] = useState<Products>([]);

  const getInitialData = async () => {
    const { data } = await apiClient.get<Products>("/products");

    setProducts(data);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
