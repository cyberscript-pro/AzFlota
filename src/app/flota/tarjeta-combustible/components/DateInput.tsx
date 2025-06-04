import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface DateInputProps {
  name: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  control?: any;
  required?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({
  name,
  label,
  value,
  onChange,
  control,
  required,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              id={name}
              name={name}
              type="date"
              {...control.register(name, { required })}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DateInput;
