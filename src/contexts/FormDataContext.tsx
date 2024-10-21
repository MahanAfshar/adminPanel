"use client";
import { createContext, useState, useContext } from "react";
import type { FormData } from "@/types";

const initialState: FormData = {
    title: '',
    description: '',
    priceUnit: 'USD',
    productCollectionID: '',
    shippingType: 'CUSTOM',
    media: [],
    sku: [
        {
            price: 0,
            quantity: 0,
            weight: 0,
            height: 0,
            length: 0,
            width: 0
        }
    ]
};

type Context = {
    formData: FormData;
    setFormData: (value: FormData) => void;
};

const formDataContext = createContext<Context | null>(null);

interface Props {
    children: React.ReactNode;
}

export default function FormDataContextProvider({
    children
}: Props) {
    const [formData, setFormData] = useState(initialState);

    return (
        <formDataContext.Provider value={{ formData, setFormData }}>
            {children}
        </formDataContext.Provider>
    )
}

export const useFormDataContext = () => {
    const context = useContext(formDataContext);
    if (!context) {
        throw new Error('useFormDataContext must be used within a FormDataContextProvider');
    }
    return context;
};