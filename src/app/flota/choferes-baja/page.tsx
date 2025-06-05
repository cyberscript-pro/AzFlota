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
import { AreaTrabajoBack, AreaTrabajoFront } from "../../types/area-types";
import LoadingSpinner from "@/app/components/loading";
import { ChoferesBajaMapper } from "./mappers/choferes-baja.mapper";
import { AreaTrabajoTable } from "./components/TableComponent";
import SidebarDashboard from "@/app/components/SidebarDashboard";
import { TarjetaBaja } from "@/app/types/tarjetas-baja-types";
import { ChoferBaja } from "@/app/types/chofer-baja.types";
import GenerateData from "./data/GenerateData";

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

const ModalButton = dynamic(() => import("../../components/ModalButton"), {
  ssr: false,
});

// Componentes memorizados
const MemoizedAreaTrabajoTable = memo(AreaTrabajoTable);
const MemoizedImage = memo(Image);

function AreaTrabajo() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AreaTrabajoContent />
    </Suspense>
  );
}

function AreaTrabajoContent() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [state, setState] = useState({
    isCreateAreaTrabajo: false,
    isReporte: false,
    selectedValue: "excel",
    pageActual: 1,
    permisoLectura: false,
    permisoEscritura: false,
    permisoTotal: false,
    selectedAreaTrabajo: null as AreaTrabajoFront | null,
    isEditAreaTrabajo: false,
  });

  const { generate } = GenerateData();

  const apiUrl = useMemo(
    () => `/api/choferes-despedidos?page=${state.pageActual}&limit=${10}`,
    [state.pageActual]
  );

  const { loading, error, data, pagination, refetch } = useApiGet<ChoferBaja>({
    url: apiUrl,
  });

  const memoizedDataFront = React.useMemo(() => {
    return ChoferesBajaMapper.fromApiToFront(data).dataFront;
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
                  Gestión de Choferes de Baja
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

            {status === "loading" || (loading && <LoadingSpinner />)}

            <div className="w-full h-2" />

            <main className="mt-2 h-[100vh-40px] min-w-full">
              <MemoizedAreaTrabajoTable
                refetch={refetch}
                data={memoizedDataFront}
                access={state.permisoEscritura}
              />
            </main>

            <footer className="w-full my-5 flex justify-center items-center">
              <div className="w-lg mx-auto flex fixed bottom-5 justify-between items-center">
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
        </div>
      )}
    </div>
  );
}

export default AreaTrabajo;
