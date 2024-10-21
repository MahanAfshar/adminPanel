"use client";
import { useFormDataContext } from "@/contexts/FormDataContext";
import { shippings } from "@/constants";
import RadioButton from "../reusable/RadioButton";

export default function Shipping() {
  const {formData, setFormData} = useFormDataContext();
  
  return (
    <>
      <RadioButton
        title="Shipping Method"
        required
        options={shippings}
        value={formData.shippingType}
        handleChange={(value) => setFormData({...formData, shippingType: value})}
      />
    </>
  )
}
