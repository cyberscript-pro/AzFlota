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
import { Chofer, ChoferFront } from "../../types/choferes-types";
import LoadingSpinner from "@/app/components/loading";
import { ChoferMapper } from "./mappers/chofer.mapper";
import { ChoferTable } from "./components/TableComponent";
import { useFormDataPost } from "./data/FormDataPost";
import UpdateChofer from "./formularios/UpdateChofer";
import GenerateData from "./data/GenerateData";
import SidebarDashboard from "@/app/components/SidebarDashboard";

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

const AddChofer = dynamic(() => import("./formularios/AddChofer"), {
  ssr: false,
});

const ModalButton = dynamic(() => import("../../components/ModalButton"), {
  ssr: false,
});

// Componentes memorizados
const MemoizedChoferTable = memo(ChoferTable);
const MemoizedImage = memo(Image);

function Choferes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ChoferesContent />
    </Suspense>
  );
}

function ChoferesContent() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // State declarations usando un reducer para optimizar el manejo del estado
  const [state, setState] = useState({
    isCreateChofer: false,
    isReporte: false,
    selectedValue: "pdf",
    pageActual: 1,
    permisoLectura: false,
    permisoEscritura: false,
    permisoTotal: false,
    selectedChofer: null as ChoferFront | null,
    isEditChofer: false,
  });

  // Custom hooks con memoización de la URL
  const apiUrl = useMemo(
    () => `/api/choferes?page=${state.pageActual}&limit=${10}`,
    [state.pageActual]
  );

  const { loading, error, data, pagination, refetch } = useApiGet<Chofer>({
    url: apiUrl,
  });

  const { form, onSubmit, loadingPost } = useFormDataPost({
    onClose: () => {
      setState((prev) => ({ ...prev, isCreateChofer: false }));
      toast.success("Chofer creado correctamente");
      refetch();
    },
  });

  const { generate } = GenerateData();

  // Memoización de datos transformados
  const memoizedDataFront = React.useMemo(() => {
    return ChoferMapper.fromApiToFront(data).dataFront;
  }, [data]);

  // Effects optimizados
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

  // Handlers memorizados
  const handleNavigate = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router]
  );

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

  const handleUpdateSuccess = useCallback(async () => {
    await refetch();
    setState((prev) => ({ ...prev }));
  }, [refetch]);

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
                  Gestión de Choferes
                </h1>
                <div className="flex">
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

            <main className="mt-2 h-[100vh-40px] min-w-full">
              <MemoizedChoferTable
                refetch={refetch}
                data={memoizedDataFront}
                access={state.permisoEscritura}
              />
            </main>

            <ModalGenerateReporte
              isOpen={state.isReporte}
              onClose={() =>
                setState((prev) => ({ ...prev, isReporte: false }))
              }
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
              isOpen={state.isCreateChofer}
              onClose={() =>
                setState((prev) => ({ ...prev, isCreateChofer: false }))
              }
            >
              <ModalBasicStyle
                title="Registro de Choferes"
                classNameTitle="text-gray-900"
                classNameContainer=""
              >
                <AddChofer
                  form={form}
                  onClose={() =>
                    setState((prev) => ({ ...prev, isCreateChofer: false }))
                  }
                  onSubmit={onSubmit}
                  loading={loadingPost}
                />
              </ModalBasicStyle>
            </Modal>

            {state.permisoEscritura && (
              <div className="fixed right-0 bottom-0 m-5 z-50">
                <ModalButton
                  className="bg-blue-900 rounded-4xl p-2 hover:bg-blue-700 transition duration-150 ease-in-out"
                  onClick={() =>
                    setState((prev) => ({ ...prev, isCreateChofer: true }))
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

            <footer className="w-full my-5 flex justify-center items-center">
              <div className="max-w-fit fixed bottom-5 mx-auto flex justify-between items-center">
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
        </div>
      )}
    </div>
  );
}

export default Choferes;
