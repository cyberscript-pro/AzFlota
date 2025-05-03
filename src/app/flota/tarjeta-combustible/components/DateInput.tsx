import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DateInputProps {
  name: string;
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  control?: any;
  required?: boolean;
}

const DateInput: React.FC<DateInputProps> = ({ name, label, value, onChange, control, required }) => {
  // Si se usa con react-hook-form, se espera que control esté presente
  if (control) {
    return (
      <div className="grid gap-2">
        <Label htmlFor={name}>{label}</Label>
        <Input
          id={name}
          name={name}
          type="date"
          {...control.register(name, { required })}
        />
      </div>
    );
  }
  // Si se usa de forma controlada
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type="date"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default DateInput; 