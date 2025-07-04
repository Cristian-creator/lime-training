import { apiClient } from "@/apiClient";
import { Product } from "@/types/products";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

// Modul prin care ii indici userului ca a aparut o eroare la incarcarea unui request depinde mult de context.
// Top cele mai frecvente contexte:
// 1. request care incarca informatiile unei pagini
// 2. request care vine ca urmare a unei actiuni a userului ( click )

// Pentru contextul 1 ai vrea sa afisezi direct in pagina un mesaj de eroare.
// Pentru contextul 2 ai vrea sa afisezi un toast notification cu un mesaj de eroare.

const ProductPage = () => {
  let params = useParams<"slug">();
  const [product, setProduct] = useState<Product | null>(null);
  const [requestError, setRequestError] = useState<string | undefined>(
    undefined
  );

  const getInitialData = async () => {
    const splittedSlug = params.slug!.split("-");
    const productId = splittedSlug[splittedSlug.length - 1];
    try {
      const { data } = await apiClient.get<Product>(`/products/${productId}`);

      setProduct(data);
    } catch (error) {
      if (error instanceof AxiosError && error.status === 404) {
        setRequestError("Product not found");
      } else {
        setRequestError("Product could not be loaded");
      }
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  if (requestError !== undefined) {
    return <p>{requestError}</p>;
  }

  if (product === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
};

export default ProductPage;

interface User {
  id: number;
  name: string;
  address: string | undefined;
}

const user: User = {
  id: 5,
  name: "Cristian",
  address: "Lascar Catargiu",
};

// if (user.address !== undefined) {
// user.address!.toUpperCase();
// }
