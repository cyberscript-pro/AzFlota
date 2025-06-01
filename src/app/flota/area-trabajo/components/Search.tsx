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
    nombre: string;
    centro: string;
    jefe: string;
  }> = (data) => {

    router.push(
      `/flota/area-trabajo/search?no=${encodeURIComponent(
        data.nombre
      )}&ce=${encodeURIComponent(data.centro)}&je=${encodeURIComponent(
        data.jefe
      )}`
    );
  };

  const form = useForm<{
    nombre: string;
    centro: string;
    jefe: string;
  }>({
    defaultValues: {
      nombre: "",
      centro: "",
      jefe: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearch)}
        className="mt-4 space-y-4 min-w-[400px]"
      >
        <InputComponent
          name="nombre"
          label="Nombre del Area de Trabajo"
          placeholder="Ingresa el nombre"
          control={form.control}
        />

        <InputComponent
          name="centro"
          label="Centro de Costo"
          placeholder="Ingresa el centro de costo"
          control={form.control}
        />

        <InputComponent
          name="jefe"
          label="Jefe del Area de Trabajo"
          placeholder="Ingresa el nombre del jefe"
          control={form.control}
        />

        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto ${
                form.formState.isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
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
