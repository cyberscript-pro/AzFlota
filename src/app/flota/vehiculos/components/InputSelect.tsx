"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {Inputs} from "@/app/types/vehiculo-types";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface InputSelectProps {
  label?: string;
  options?: SelectOption[] | undefined;
  name: keyof Inputs;
  control: any; // useForm().control
  disabled?: boolean;
  required?: boolean;
  placeholder: string;
  className?: string;
}

const InputSelect = ({
  label,
  options,
  name,
  control,
  disabled = false,
  required = true,
  placeholder = "Selecciona una opción",
  className = "",
}: InputSelectProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`mb-4 ${className}`}>
          {label && (
            <FormLabel className="text-gray-700">
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Select
              onValueChange={field.onChange}
              value={field.value}
              defaultValue={field.value}
              disabled={disabled}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options?.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputSelect;
