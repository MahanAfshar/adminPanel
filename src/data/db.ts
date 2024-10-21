import { v4 as uuidv4 } from "uuid";

export const collections = [
    {
        id: uuidv4(),
        value: 'Shirt'
    },
    {
        id: uuidv4(),
        value: 'Pants'
    },
    {
        id: uuidv4(),
        value: 'Hat'
    },
    {
        id: uuidv4(),
        value: 'Socks'
    }
];

export const properties = [
    {
        id: uuidv4(),
        name: 'Size'
    },
    {
        id: uuidv4(),
        name: 'Color'
    },
];