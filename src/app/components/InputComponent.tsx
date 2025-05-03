import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";

type InputComponentProps = {
  name: string;
  label: string;
  placeholder: string;
  control: any;
};

function InputComponent({
  name,
  label,
  placeholder,
  control,
}: InputComponentProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default InputComponent;
