export type Media = {
    url: string;
    isMain: boolean;
};

export type FormData = {
    title: string;
    description: string;
    priceUnit: string;
    productCollectionID: string;
    shippingType: string;
    media: Media[];
    sku: {
        price: number;
        quantity: number;
        weight: number;
        height: number;
        length: number;
        width: number;
    }[];
};

export type Collection = {
    id: string;
    value: string;
};

export type Property = {
    name: string;
    value: string;
};

export type PropetyWithValues = {
    name: string;
    values: {
        id: string;
        value: string;
    }[]
};