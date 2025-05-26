// components/SearchBar.js
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputComponent from "@/app/components/InputComponent";
import DateInput from "./DateInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  onClose: () => void;
};

const SearchForm = ({ onClose }: Props) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSearch: SubmitHandler<{
    numero: string;
    tipo: string;
    estado: string;
    month: string;
    day: string;
  }> = (data) => {
    let fecha_vencimiento = data.month;

    if (data.day) {
      fecha_vencimiento = fecha_vencimiento + "-" + data.day;
    }

    setLoading(true);
    router.push(
      `/flota/tarjeta-combustible/search?n=${
        data.numero
      }&e=${encodeURIComponent(data.estado)}&t=${encodeURIComponent(
        data.tipo
      )}&d=${fecha_vencimiento}`
    );
    setLoading(false);
  };

  const form = useForm<{
    numero: string;
    tipo: string;
    estado: string;
    month: string;
    day: string;
  }>({
    defaultValues: {
      numero: "",
      tipo: "",
      estado: "",
      month: "",
      day: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearch)}
        className="mt-4 space-y-4 min-w-[400px]"
      >
        <InputComponent
          name="numero"
          label="Numero de Tarjeta"
          placeholder="Ingresa el numero de la tarjeta"
          control={form.control}
        />

        <InputSelect
          label="Tipo de Combustible"
          name="tipo"
          control={form.control}
          placeholder="Selecciona una opción"
          options={[
            { value: "Diesel", label: "Diesel" },
            { value: "Especial", label: "Gasolina Especial" },
            { value: "B91", label: "Gasolina B-91" },
            { value: "B83", label: "Gasolina B-83" },
          ]}
        />

        <InputSelect
          label="Estado"
          name="estado"
          control={form.control}
          placeholder="Selecciona una opción"
          options={[
            { value: "Active", label: "Activa" },
            { value: "Inactive", label: "Inactiva" },
            { value: "Blocked", label: "Bloqueada" },
            { value: "Expired", label: "Expirada" },
          ]}
        />

        <div className="grid gap-2">
          <Label htmlFor="fecha_vencimiento">Fecha de Vencimiento</Label>
          <div className="flex gap-2">
            <Input
            className="w-20"
              type="number"
              id="day"
              {...form.control.register("day")}
              min={1}
              max={31}
            />
            <Input
              id={"fecha_vencimiento"}
              type="month"
              {...form.control.register("month")}
            />
          </div>
        </div>

        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto `}
          >
            {loading ? "Buscando..." : "Buscar"}
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
            }}
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Cancelar
          </button>
        </div>
      </form>
    </Form>
  );
};

export default SearchForm;

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface InputSelectProps {
  label?: string;
  name: string;
  options: SelectOption[];
  control: any;
  disabled?: boolean;
  required?: boolean;
  placeholder: string;
  className?: string;
}

const InputSelect = ({
  label,
  name,
  options,
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
                {options.map((option) => (
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
