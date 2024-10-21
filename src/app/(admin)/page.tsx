"use client";
import { FormEvent, useState } from "react";
import { dropdowns } from "@/constants/index";
import Dropdown from "@/components/reusable/Dropdown";
import Button from "@/components/reusable/Button";
import { useFormDataContext } from "@/contexts/FormDataContext";

export default function AdminPage() {
  const [dropdownActived, setDropdownActived] = useState('');
  const { formData, setFormData } = useFormDataContext();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    fetch('#', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    .then(() => {
      console.log(formData)
      alert(JSON.stringify(formData))
      setFormData({
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
        ]})
      })
    .catch(() => new Error('something went wrong!'))
  };

  return (
    <form
      className="mt-6 sm:mt-11 mb-6 flex flex-col gap-2 *:w-full *:max-w-[900px] *:mx-auto"
      onSubmit={handleSubmit}
    >
      {dropdowns.map(({ title, subTitle, require, bodyContent }) => (
        <Dropdown
          key={title}
          title={title}
          subTitle={subTitle}
          required={require}
          show={dropdownActived == title ? true : false}
          bodyContent={bodyContent}
          dropdownActived={dropdownActived}
          setDropdownActived={setDropdownActived}
        />
      ))}
      <div
        className="flex items-center justify-between"
      >
        <Button 
          title="Save as Draft"
          className="text-sm sm:text-base sm:font-medium"
        />
        <div
          className="flex items-center gap-2"
        >
          <Button 
            title="Cancel"
            className="bg-grayOne p-2 text-sm sm:text-base sm:py-3 sm:px-5 sm:font-medium"
          />
          <Button 
            title="Publish Product"
            className="bg-greenOne p-2 text-sm sm:text-base sm:py-3 sm:px-5 sm:font-medium"
            type="submit"
          />
        </div>
      </div>
    </form>
  )
}
