export interface Product {
    id: number;
    name: string;
    category: string;
    description: string;
    price: string;
    currency: string;
    available_quantity: number;
    sold_from: string | null;
    sold_to: string | null;
}

export type Products = Product[];