import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import api from "~/services/api";

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    formatedPrice: string;
    image: string;
}

type ProductState = {
    products: Product[];
    cart: Product[];
    favorite: Product[];
    setCart: Dispatch<SetStateAction<Product[]>>
    setFavorite: Dispatch<SetStateAction<Product[]>>
}

type ProductProviderProps = {
    children: React.ReactNode;
}

const ProductContext = createContext({} as ProductState);

export function ProductProvider({ children }: ProductProviderProps) {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [favorite, setFavorite] = useState<Product[]>([]);
    
    useEffect(() => {
        handleGetUserData();
    }, []);
    
    async function handleGetUserData() {
        const response = await api.get("products");
        const data = response.data;
        setProducts(data);
    }
    
    return(
        <ProductContext.Provider value={{products, favorite, cart, setCart, setFavorite}}>
            {children}
        </ProductContext.Provider>
    )
} 

export function useCart() {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    };
    return context;
};
