import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import InputComponent from "@/app/components/InputComponent";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type Props = {
  onClose: () => void;
};

const SearchForm = ({ onClose }: Props) => {
  const router = useRouter();

  const handleSearch: SubmitHandler<{
    folio: string;
    comprobante: string;
    vehiculoChapa: string;
    month: string;
    day: string;
  }> = (data) => {
    let fecha = data.month;

    if (data.day) {
      fecha = fecha + "-" + data.day;
    }

    router.push(
      `/flota/cargas/search?f=${encodeURIComponent(
        data.folio
      )}&co=${encodeURIComponent(data.comprobante)}&ch=${encodeURIComponent(
        data.vehiculoChapa
      )}&d=${fecha}`
    );
  };

  const form = useForm<{
    folio: string;
    comprobante: string;
    vehiculoChapa: string;
    month: string;
    day: string;
  }>({
    defaultValues: {
      folio: "",
      comprobante: "",
      vehiculoChapa: "",
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
          name="folio"
          label="Folio"
          placeholder="Ingresa el folio"
          control={form.control}
        />

        <InputComponent
          name="comprobante"
          label="Comprobante"
          placeholder="Ingresa el numero de comprobante"
          control={form.control}
        />

        <div className="grid gap-2">
          <Label htmlFor="fecha_vencimiento">Fecha</Label>
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

        <InputComponent
          name="vehiculoChapa"
          label="Vehiculo"
          placeholder="Ingresa la chapa"
          control={form.control}
        />

        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
          >
            {form.formState.isSubmitting ? "Buscando..." : "Buscar"}
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              form.reset();
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
