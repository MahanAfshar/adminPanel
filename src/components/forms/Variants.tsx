"use client";
import { useState } from "react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import SelectOrType from "../reusable/SelectOrType";
import Button from "../reusable/Button";
import Input from "../reusable/Input";
import { properties } from "@/data/db";
import trash from "@/../public/icons/trash.svg";
import { tabelHeads } from "@/constants";
import cover from "@/../public/icons/cover.svg";
import drop from "@/../public/icons/drop.svg";
import edit from "@/../public/icons/edit.svg";
import { Property, PropetyWithValues } from "@/types";

export default function Variants() {
  const [dynamicValue, setDynamicValue] = useState('');
  const [propertieValues, setPropertieValues] = useState([
    {
      id: uuidv4(),
      value: ''
    }
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [datas, setDatas] = useState<PropetyWithValues[]>([]);
  const handleChange = (value: string, id: string) => {
    const changedData = propertieValues.map(property => property.id == id ? {...property, value: value} : property);
    setPropertieValues(changedData);
  };
  const handleRemove = (id: string) => {
    const filteredData = propertieValues.filter(property => property.id !== id);
    setPropertieValues(filteredData);
  };
  const combinations = (arrays: Property[][]) => {
    let result: Property[][] = [];

    const combine = (current: Property[], index: number) => {
      if(index == arrays.length) {
        result.push(current)
        return;
      }

      for(const item of arrays[index]) {
        combine([...current, item], index + 1);
      };
    };

    combine([], 0);
    return result;
  }
  const seperate = datas.map(data => data.values.map(value => ({ name: data.name, value: value.value})));
  const cobminedData = combinations(seperate);
  
  return (
    <div
      className="flex flex-col gap-5 px-6 sm:px-9 pb-6 sm:pb-9"
    >
      {datas && datas.map((data, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 sm:p-5 bg-blackOne rounded-lg text-xs sm:text-sm"
        >
          <span
            className="mr-2"
          >{data.name}</span>
          <ul
            className="flex items-center gap-2 flex-wrap"
          >
            {data.values.map((value: any) => (
              <li
                key={value.id}
                className="bg-grayOne rounded-3xl px-4 py-1.5 font-medium"
              >
                {value.value}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {isAdding && (
        <div
          className="flex flex-col gap-2"
        >
          <div>
            <h4>
              Product Properties
              <span
                className="text-greenOne"
              >
                *
              </span>
            </h4>
            <h5
              className="text-grayTwo text-sm"
            >
              Add at least one property to enable all variant fields.
            </h5>
          </div>
          <div
            className="bg-blackOne rounded-lg p-5 sm:p-6"
          >
            <div
              className="flex flex-col gap-3"
            >
              <span>Property Name</span>
              <SelectOrType
                options={properties}
                dynamicValue={dynamicValue}
                setDynamicValue={(value) => setDynamicValue(value)}
              />
            </div>
            <div
              className="flex flex-col mt-6"
            >
              <span>Property Values</span>
              {propertieValues.map(propertieValue => (
                <div
                  key={propertieValue.id}
                  className="relative"
                >
                  <input
                    placeholder="default"
                    className="rounded-lg bg-grayOne w-full p-3 pr-8 mt-3"
                    onChange={(e) => {
                      const { target: { value } } = e;
                      handleChange(value, propertieValue.id);

                      if(value.length == 1) {
                        setPropertieValues([
                          ...propertieValues,
                          {
                            id: uuidv4(),
                            value: ''
                          }
                        ]);
                      }
                    }}
                  />
                  {propertieValues.length > 1 && (
                    <div
                      className="w-9 sm:w-10 h-12 absolute top-9 right-5 -translate-y-1/2 translate-x-1/2 grid place-content-center cursor-pointer"
                      onClick={() => handleRemove(propertieValue.id)}
                    >
                      <Image
                        src={trash}
                        width={20}
                        height={20}
                        alt="trash"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Button
        title="Add new property"
        className="bg-greenOne mt-3 p-3 font-medium"
        onClick={() => {
          const propertieValuesFiltered = propertieValues.filter(item => item.value !== '');
          if(propertieValuesFiltered.length > 0 && dynamicValue.length > 0) {
            setDatas([...datas, {name: dynamicValue, values: propertieValuesFiltered}])
          }
          setDynamicValue('');
          setPropertieValues([
            {
              id: uuidv4(),
              value: ''
            }
          ])
          setIsAdding(prev => !prev)
        }}
      />
      {cobminedData.length > 1 && (
        <div
          className="overflow-hidden"
        >
          <div
            className="overflow-auto border border-grayTwo rounded-lg"
          >
            <table
              className="text-xs text-grayTwo font-medium"
            >
              <thead>
                <tr
                  className="*:py-4 *:px-5 bg-grayThree"
                >
                  {tabelHeads.map(tabelHead => (
                    <th
                      key={tabelHead}
                    >
                      {tabelHead}
                    </th>
                  ))}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cobminedData.map((item, index) => (
                  <tr
                    key={index}
                    className="[&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:border-grayTwo *:py-3 *:p-1"
                  >
                    <td
                      className="flex items-center gap-1"
                    >
                      {item.map(obj =>
                        obj.name == 'Color' ? (
                          <span
                            className="inline-block w-4 h-4 rounded-full"
                            style={{ backgroundColor: obj.value}}
                          ></span>
                        ) : (
                          <span>{obj.value}</span>
                        )
                      )}
                    </td>
                    <td>
                      <Input 
                        placeholder="0"
                        inputClassName="!mt-0 w-full h-10"
                        handleChange={() => {}}
                      />
                    </td>
                    <td>
                      <Input 
                        placeholder="-1"
                        inputClassName="!mt-0 w-full h-10"
                        handleChange={() => {}}
                      />
                    </td>
                    <td
                      className="flex items-center gap-1"
                    >
                      <Input
                        placeholder="0"
                        inputClassName="!mt-0 placeholder:text-center text-center w-10 h-10 !p-0"
                        required
                        handleChange={() => {}}
                      />
                      USD
                    </td>
                    <td>
                      <div
                        className="flex items-center gap-1"
                      >
                        <Input 
                          type="text"
                          placeholder="0"
                          inputClassName="!mt-0 placeholder:text-center text-center w-10 h-10 !p-0"
                          handleChange={() => {}}
                        />
                        x
                        <Input 
                          type="text"
                          placeholder="0"
                          inputClassName="!mt-0 placeholder:text-center text-center w-10 h-10 !p-0"
                          handleChange={() => {}}
                        />
                        x
                        <Input 
                          type="text"
                          placeholder="0"
                          inputClassName="!mt-0 placeholder:text-center text-center w-10 h-10 !p-0"
                          handleChange={() => {}}
                        />
                        Inc
                      </div>
                    </td>
                    <td
                      className="flex items-center justify-center gap-1"
                    >
                      <Input
                        type="text"
                        placeholder="0"
                        inputClassName="!mt-0 placeholder:text-center text-center w-10 h-10 !p-0"
                        handleChange={() => {}}
                      />
                      oz
                    </td>
                    <td>
                      <div
                        className="grid place-content-center"
                      >
                        <Image
                          src={cover}
                          width={16}
                          height={16}
                          alt="cover"
                        />
                      </div>
                    </td>
                    <td>
                      <div
                        className="grid place-content-center"
                      >
                        <Image
                          src={drop}
                          width={16}
                          height={16}
                          alt="drop"
                        />
                      </div>
                    </td>
                    <td>
                      <div
                        className="flex items-center gap-1"
                      >
                        <Image
                          src={edit}
                          width={16}
                          height={16}
                          alt="edit"
                        />
                        <Image
                          src={trash}
                          width={16}
                          height={16}
                          alt="trash"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
