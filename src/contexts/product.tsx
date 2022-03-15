import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import api from "~/services/api";

export type ProductProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    formatedPrice: string;
    image: string;
    largeImage: string;
}

type ProductState = {
    products: ProductProps[];
    cart: ProductProps[];
    favorite: ProductProps[];
    setCart: Dispatch<SetStateAction<ProductProps[]>>
    setFavorite: Dispatch<SetStateAction<ProductProps[]>>
}

type ProductProviderProps = {
    children: React.ReactNode;
}

const ProductContext = createContext({} as ProductState);

export function ProductProvider({ children }: ProductProviderProps) {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [cart, setCart] = useState<ProductProps[]>([]);
    const [favorite, setFavorite] = useState<ProductProps[]>([]);
    
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
