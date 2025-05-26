import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import InputComponent from "@/app/components/InputComponent";

type Props = {
  onClose: () => void;
};

const SearchForm = ({ onClose }: Props) => {
  const router = useRouter();

  const handleSearch: SubmitHandler<{
    tipo: string;
    marca: string;
    chapa: string;
  }> = (data) => {

    router.push(
      `/flota/vehiculos/search?ch=${encodeURIComponent(
        data.chapa
      )}&m=${encodeURIComponent(data.marca)}&t=${encodeURIComponent(
        data.tipo
      )}`
    );
  };

  const form = useForm<{
    tipo: string;
    marca: string;
    chapa: string;
  }>({
    defaultValues: {
      chapa: "",
      marca: "",
      tipo: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearch)}
        className="mt-4 space-y-4 min-w-[400px]"
      >
        <InputComponent
          name="chapa"
          label="Chapa"
          placeholder="Ingresa el chapa"
          control={form.control}
        />

        <InputComponent
          name="marca"
          label="Marca"
          placeholder="Ingresa la marca"
          control={form.control}
        />

        <InputComponent
          name="tipo"
          label="Tipo"
          placeholder="Ingresa el tipo"
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
