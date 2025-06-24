import { useEffect, useState } from "react";
import { apiClient } from "./apiClient";
import ProductCard from "./components/ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getInitialData = async () => {
    const { data } = await apiClient.get("/products");

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
