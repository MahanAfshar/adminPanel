import GeneralInformation from "@/components/forms/GeneralInformation";
import Shipping from "@/components/forms/Shipping";
import Variants from "@/components/forms/Variants";

export const dropdowns = [
    {
        title: 'General Information',
        subTitle: 'Provide product details.',
        require: true,
        bodyContent: <GeneralInformation />
    },
    {
        title: 'Variants',
        subTitle: 'Create product properties to use in product variations.',
        require: true,
        bodyContent: <Variants />
    },
    {
        title: 'Shipping',
        subTitle: 'Select a shipping method to deliver your product.',
        require: true,
        bodyContent: <Shipping />
    }
];

export const shippings = [
    {
        label: 'EASY Post',
        description: 'EASY Post takes responsibility to deliver your customer orders.',
        value: 'CUSTOM',
        name: 'shippingMethod'
    },
    {
        label: 'Warehouse Management System Integration',
        description: 'Product fulfillment and shipping directly from our warehouse to your customers.',
        value: 'NORMAL',
        name: 'shippingMethod'
    }
];

export const tabelHeads = [
    'Variant',
    'Quantity',
    'Extenal ID',
    'Price',
    'Packaging',
    'Weight',
    'Cover',
    'Drop',
];