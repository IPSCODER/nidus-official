import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";

interface props {
  // eslint-disable-next-line
  control: any;
  name: string;
  type?: string;
  placeholder: string;
  label: string;
  maxLength: number;
  disable?: boolean;
  className?: string;
}

export const FormFieldInput: React.FC<props> = ({
  control,
  name,
  type,
  placeholder,
  label,
  maxLength,
  disable = false,
}) => {
  const isEmailPhone = name === "email" || name === "phone" || type === "phone";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    pattern: RegExp,
    field: { value: string; onChange: (value: string) => void }
  ) => {
    e.target.value = isEmailPhone
      ? e.target.value.replace(/\s+/g, "")
      : e.target.value.replace(/\s+/g, " ");
    if (pattern.test(e.target.value)) {
      field.onChange(e.target.value);
    }
  };

  const pattern =
    type === "email"
      ? /^[a-zA-Z0-9@.\s]*$/
      : type === "phone"
      ? /^[0-9\s]*$/
      : type === "name"
      ? /^[a-zA-Z\s]*$/
      : /^[a-zA-Z0-9\s]*$/;

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold font-panchang-medium" >{label}</FormLabel>
            <FormControl>
              <Input
                type={type ?? "text"}
                placeholder={placeholder}
                {...field}
                disabled={disable}
                maxLength={maxLength}
                onChange={(e) => handleInputChange(e, pattern, field)}
                className="bg-transparent border-b border-gray-700 focus:border-outline-none py-2 px-1"
              />
            </FormControl>
            <FormMessage />
            {/* {maxLength && (
              <div className="text-sm text-gray-500">
                {field.value?.length || 0}/{maxLength} characters
              </div>
            )} */}
          </FormItem>
        )}
      />
    </>
  );
};



export const FormTextArea: React.FC<props> = ({
  name,
  control,
  label,
  placeholder,
  maxLength,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    pattern: RegExp,
    field: { value: string; onChange: (value: string) => void }
  ) => {
    e.target.value = e.target.value.replace(/\s+/g, " ");
    if (!pattern.test(e.target.value)) {
      field.onChange(e.target.value);
    }
  };

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="font-bold font-panchang-medium" >{label}</FormLabel>
            <FormControl>
              <Textarea
                placeholder={placeholder}
                {...field}
                maxLength={maxLength}
                onChange={
                  (e) => handleInputChange(e, /[<>{}()[\];'"\\/%&|$#`]/g, field)
                  // handleInputChange(e, /^[a-zA-Z0-9,.\s]*$/, field)
                }
                className="bg-transparent border-b border-gray-700 focus:border-outline-none w-full py-2 px-1"
              />
            </FormControl>
            <FormMessage />
            {maxLength && (
              <div className="text-sm text-gray-500">
                {field.value?.length || 0}/{maxLength} characters
              </div>
            )}
          </FormItem>
        )}
      />
    </>
  );
};