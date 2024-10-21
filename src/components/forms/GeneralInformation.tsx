"use client";
import Input from "../reusable/Input";
import SelectBox from "../reusable/SelectBox";
import TextArea from "../reusable/TextArea";
import Uploader from "../reusable/Uploader";
import upload from "@/../public/icons/upload.svg";
import { useFormDataContext } from "@/contexts/FormDataContext";
import { collections } from "@/data/db";

export default function GeneralInformation () {
  const { formData, setFormData} = useFormDataContext();
  
  return (
    <div
      className="flex flex-col gap-5 sm:gap-6 px-6 pb-6 sm:px-9 sm:pb-9"
    >
      <Input
        title="Product Name"
        required
        placeholder="e.g., Long Sleeve T-shirt"
        max="75"
        value={formData.title}
        handleChange={(value) => setFormData({...formData, title: value})}
      />
      <TextArea 
        title="Description"
        placeholder="e.g., A stylish and comfortable long sleeve T-shirt"
        required
        cols="10"
        rows="8"
        max="250"
        value={formData.description}
        handleChange={(value) => setFormData({...formData, description: value})}
      />
      <Uploader 
        title="Product Images"
        required
        multiple
        subTitle="Upload static images of your product."
        accept=".jpg, .jpeg, .png, .gif"
        max="5"
        inputClassName="w-[185px] h-[185px] text-xs text-center flex flex-col items-center justify-center gap-4"
        iconSrc={upload}
        details="Upload JPG, JPEG, PNG or Gif(Max 5 MB)"
        images={formData.media}
        handleChange={(value) => setFormData({...formData, media: value})}
      />
      <SelectBox
        title="Collections"
        required
        subTitle="Select a collection or create a new one to publish the product."
        placeholder="Public Collection"
        options={collections}
        handleChange={(value) => setFormData({...formData, productCollectionID: value})}
      />
    </div>
  )
}
