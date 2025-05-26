"use client";

import React, {
  Suspense,
  useEffect,
  useState,
  useCallback,
  memo,
  useMemo,
} from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "sonner";

import useApiGet from "../../hooks/useApiGet";
import { Tarjeta, TarjetaFront } from "../../types/tarjeta-types";
import LoadingSpinner from "@/app/components/loading";
import { TarjetaCombustibleMapper } from "./mappers/tarjeta-combustible.mapper";
import { TarjetaCombustibleTable } from "./components/TableComponent";
import { useFormDataPost } from "./data/FormDataPost";
import UpdateTarjetaCombustible from "./formularios/UpdateTarjetaCombustible";
import SidebarDashboard from "@/app/components/SidebarDashboard";
import GenerateData from "./data/GenerateData";
import SearchForm from "./components/Search";

// Importaciones dinámicas para reducir el bundle inicial
const Modal = dynamic(() => import("@/app/components/modal"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const ModalGenerateReporte = dynamic(
  () => import("./components/ModalGenerateReporte"),
  {
    loading: () => <LoadingSpinner />,
    ssr: false,
  }
);

const ModalBasicStyle = dynamic(
  () => import("../../components/ModalBasicStyle"),
  {
    ssr: false,
  }
);

const AddTarjetaCombustible = dynamic(
  () => import("./formularios/AddTarjetaCombustible"),
  {
    ssr: false,
  }
);

const ModalButton = dynamic(() => import("../../components/ModalButton"), {
  ssr: false,
});

// Componentes memorizados
const MemoizedTarjetaCombustibleTable = memo(TarjetaCombustibleTable);
const MemoizedImage = memo(Image);

function TarjetasCombustible() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <TarjetasCombustibleContent />
    </Suspense>
  );
}

function TarjetasCombustibleContent() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // State declarations usando un reducer para optimizar el manejo del estado
  const [state, setState] = useState({
    isCreateTarjetaCombustible: false,
    isSearch: false,
    isReporte: false,
    selectedValue: "pdf",
    pageActual: 1,
    permisoLectura: false,
    permisoEscritura: false,
    permisoTotal: false,
    selectedTarjetaCombustible: null as TarjetaFront | null,
    isEditTarjetaCombustible: false,
  });

  // Custom hooks con memoización de la URL
  const apiUrl = useMemo(
    () => `/api/tarjetas-combustible?page=${state.pageActual}&limit=${10}`,
    [state.pageActual]
  );

  const { loading, error, data, pagination, refetch } = useApiGet<Tarjeta>({
    url: apiUrl,
  });

  const { form, onSubmit, loadingPost } = useFormDataPost({
    onClose: () => {
      setState((prev) => ({ ...prev, isCreateTarjetaCombustible: false }));
      toast.success("Tarjeta Combustible creada correctamente");
      refetch();
    },
  });

  const { generate } = GenerateData();

  const memoizedDataFront = React.useMemo(() => {
    return TarjetaCombustibleMapper.fromApiToFront(data).dataFront;
  }, [data]);

  useEffect(() => {
    if (!session) {
      router.push("/login");
      return;
    }

    const role = session.user.role;
    setState((prev) => ({
      ...prev,
      permisoLectura: true,
      permisoEscritura: ["encargado", "supervisor"].includes(role),
      permisoTotal: role === "supervisor",
    }));
  }, [session, router]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, selectedValue: e.target.value }));
  }, []);

  const handlePageChange = useCallback((direction: "next" | "prev") => {
    setState((prev) => ({
      ...prev,
      pageActual:
        direction === "next" ? prev.pageActual + 1 : prev.pageActual - 1,
    }));
  }, []);

  if (error) return <div>Error {error}</div>;

  return (
    <div>
      <Toaster richColors />
      {state.permisoLectura && (
        <div className="flex w-full min-h-screen z-0">
          <SidebarDashboard />

          <div className="flex-1 flex flex-col">
            <header className="sticky top-0 w-full bg-white shadow">
              <div className="w-full mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">
                  Gestión de Tarjetas de Combustible
                </h1>
                <div className="flex">
                  <button
                    className="mr-4 border p-2 rounded-4xl text-gray-500 hover:text-blue-600 focus:outline-none"
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        isSearch: true,
                      }))
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      setState((prev) => ({ ...prev, isReporte: true }))
                    }
                    className="mr-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
                  >
                    Generar Reporte
                  </button>
                </div>
              </div>
            </header>

            <div className="w-full h-2" />

            {status === "loading" || (loading && <LoadingSpinner />)}

            <main className="mt-2 h-[100vh-40px]">
              <MemoizedTarjetaCombustibleTable
                refetch={refetch}
                data={memoizedDataFront}
                access={state.permisoEscritura}
              />
            </main>

            <footer className="w-full my-5 flex justify-center items-center">
              <div className="w-lg mx-auto fixed bottom-5 flex justify-between items-center">
                <ModalButton
                  disabled={!pagination?.hasPrevPage}
                  onClick={() => handlePageChange("prev")}
                  className="inline-flex w-full justify-center items-center border-2 border-black rounded-4xl text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                >
                  <MemoizedImage
                    src="/back.svg"
                    alt="Back"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </ModalButton>

                <div className="flex mx-2">
                  <h4 className="mr-6">
                    Página Actual: {pagination?.currentPage}
                  </h4>
                  <h4 className="ml-6">
                    Última Página: {pagination?.totalPages}
                  </h4>
                </div>

                <ModalButton
                  disabled={!pagination?.hasNextPage}
                  onClick={() => handlePageChange("next")}
                  className="inline-flex w-full justify-center items-center border-2 border-black rounded-4xl text-white shadow-sm sm:ml-3 sm:w-auto"
                >
                  <MemoizedImage
                    src="/next.svg"
                    alt="Next"
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                </ModalButton>
              </div>
            </footer>
          </div>
          <ModalGenerateReporte
            isOpen={state.isReporte}
            onClose={() => setState((prev) => ({ ...prev, isReporte: false }))}
            selectedValue={state.selectedValue}
            onChange={handleChange}
            radioButtonProps={[
              { title: "Reporte en PDF", name: "reporte", value: "pdf" },
              { title: "Reporte en Excel", name: "reporte", value: "excel" },
            ]}
            onClickReporte={() => {
              setState((prev) => ({ ...prev, isReporte: false }));
              generate(state.selectedValue);
            }}
            onClickCancelar={() =>
              setState((prev) => ({ ...prev, isReporte: false }))
            }
          />

          <Modal
            isOpen={state.isCreateTarjetaCombustible}
            onClose={() =>
              setState((prev) => ({
                ...prev,
                isCreateTarjetaCombustible: false,
              }))
            }
          >
            <ModalBasicStyle
              title="Registro de Tarjeta de Combustible"
              classNameTitle="text-gray-900"
              classNameContainer=""
            >
              <AddTarjetaCombustible
                form={form}
                onClose={() =>
                  setState((prev) => ({
                    ...prev,
                    isCreateTarjetaCombustible: false,
                  }))
                }
                onSubmit={onSubmit}
                loadingAdd={loadingPost}
              />
            </ModalBasicStyle>
          </Modal>

          <Modal
            isOpen={state.isSearch}
            onClose={() =>
              setState((prev) => ({
                ...prev,
                isSearch: false,
              }))
            }
          >
            <ModalBasicStyle
              title="Buscador"
              classNameTitle="text-gray-900"
              classNameContainer=""
            >
              <SearchForm
                onClose={() =>
                  setState((prev) => ({
                    ...prev,
                    isSearch: false,
                  }))
                }
              />
            </ModalBasicStyle>
          </Modal>

          {state.permisoEscritura && (
            <div className="fixed right-0 bottom-0 m-5 z-50">
              <ModalButton
                className="bg-blue-900 rounded-4xl p-2 hover:bg-blue-700 transition duration-150 ease-in-out"
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    isCreateTarjetaCombustible: true,
                  }))
                }
              >
                <MemoizedImage
                  src="/add.svg"
                  alt="Crear"
                  width={50}
                  height={50}
                  loading="lazy"
                />
              </ModalButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TarjetasCombustible;
