"use client";

import React, { Suspense, useEffect, useState, useCallback, memo, useMemo } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "sonner";

import useApiGet from "../../hooks/useApiGet";
import { Tarjeta, TarjetaFront } from "./utils/types";
import LoadingSpinner from "@/app/components/loading";
import { TarjetaCombustibleMapper } from "./mappers/tarjeta-combustible.mapper";
import { TarjetaCombustibleTable } from "./components/TableComponent";
import { useFormDataPost } from "./data/FormDataPost";
import UpdateTarjetaCombustible from "./formularios/UpdateTarjetaCombustible";

// Importaciones dinámicas para reducir el bundle inicial
const Modal = dynamic(() => import("@/app/flota/components/modal"), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const ModalGenerateReporte = dynamic(() => import("./components/ModalGenerateReporte"), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const ModalBasicStyle = dynamic(() => import("../../components/ModalBasicStyle"), {
  ssr: false
});

const AddTarjetaCombustible = dynamic(() => import("./formularios/AddTarjetaCombustible"), {
  ssr: false
});

const ModalButton = dynamic(() => import("../components/ModalButton"), {
  ssr: false
});

// Componentes memorizados
const MemoizedTarjetaCombustibleTable = memo(TarjetaCombustibleTable);
const MemoizedImage = memo(Image);

function TarjetasCombustible() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <TarjetasCombustibleContent />
    </Suspense>
  )
}

function TarjetasCombustibleContent() {
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
    selectedTarjetaCombustible: null as TarjetaFront | null,
    isEditTarjetaCombustible: false
  });

  // Custom hooks con memoización de la URL
  const apiUrl = useMemo(
    () => `/api/tarjetas-combustible?page=${state.pageActual}&limit=${10}`,
    [state.pageActual]
  );

  const { loading, error, data, pagination, refetch } = useApiGet<Tarjeta>({
    url: apiUrl,
  });

  const { form, onSubmit } = useFormDataPost({
    onClose: () => {
      setState(prev => ({ ...prev, isCreateChofer: false }));
      toast.success("Tarjeta Combustible creada correctamente");
      refetch();
    },
  });

  // Memoización de datos transformados
  const memoizedDataFront = React.useMemo(() => {
    return TarjetaCombustibleMapper.fromApiToFront(data).dataFront;
  }, [data]);

  // Effects optimizados
  useEffect(() => {
    if (!session) {
      router.push("/login");
      return;
    }

    const role = session.user.role;
    setState(prev => ({
      ...prev,
      permisoLectura: true,
      permisoEscritura: ["encargado", "supervisor"].includes(role),
      permisoTotal: role === "supervisor"
    }));
  }, [session, router]);

  // Handlers memorizados
  const handleNavigate = useCallback((path: string) => {
    router.push(path);
  }, [router]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, selectedValue: e.target.value }));
  }, []);

  const handlePageChange = useCallback((direction: 'next' | 'prev') => {
    setState(prev => ({
      ...prev,
      pageActual: direction === 'next' ? prev.pageActual + 1 : prev.pageActual - 1
    }));
  }, []);

  // const handleEdit = useCallback((ci: string) => {
  //   const chofer = memoizedDataFront.find(c => c.ci === ci);
  //   if (chofer) {
  //     setState(prev => ({
  //       ...prev,
  //       selectedChofer: chofer,
  //       isEditChofer: true
  //     }));
  //   }
  // }, [memoizedDataFront]);

  const handleUpdateSuccess = useCallback(async () => {
    await refetch();
    // Forzar una actualización del estado para asegurar que la tabla se refresque
    setState(prev => ({ ...prev }));
  }, [refetch]);

  if (status === "loading") return <LoadingSpinner />;
  if (error) return <div>Error {error}</div>;

  return (
    <div>
      <Toaster richColors />
      {state.permisoLectura && (
        <div className="w-full min-h-screen z-0">
          <div className="fixed top-0 left-0 m-1 z-50">
            <ModalButton
              className="rounded-4xl p-2"
              onClick={() => handleNavigate("/dashboard")}
            >
              <MemoizedImage
                src="/back-page.svg"
                alt="Back Page"
                width={50}
                height={50}
                loading="lazy"
              />
            </ModalButton>
          </div>

          <header className="fixed w-full bg-white shadow">
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Gestión de Tarjetas de Combustible
              </h1>
              <div className="flex">
                <button
                  onClick={() => setState(prev => ({ ...prev, isReporte: true }))}
                  className="mr-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
                >
                  Generar Reporte
                </button>
              </div>
            </div>
          </header>

          <div className="w-full h-10" />

          <main className="mt-2 h-[100vh-40px]">
            <MemoizedTarjetaCombustibleTable 
              refetch={refetch}
              data={memoizedDataFront} 
              access={state.permisoEscritura}
            />
          </main>

          {loading && (
            <div className="fixed inset-0 z-50 flex justify-center items-center">
              <div className="fixed inset-0 bg-opacity-50 transition-opacity" />
              <MemoizedImage
                src="/loading.svg"
                alt="Loading"
                width={100}
                height={100}
                loading="lazy"
              />
            </div>
          )}

          <ModalGenerateReporte
            isOpen={state.isReporte}
            onClose={() => setState(prev => ({ ...prev, isReporte: false }))}
            selectedValue={state.selectedValue}
            onChange={handleChange}
            radioButtonProps={[
              { title: "Reporte en PDF", name: "reporte", value: "pdf" },
              { title: "Reporte en Excel", name: "reporte", value: "excel" }
            ]}
            onClickReporte={() => {
              setState(prev => ({ ...prev, isReporte: false }));
            }}
            onClickCancelar={() => setState(prev => ({ ...prev, isReporte: false }))}
          />

          <Modal
            isOpen={state.isCreateChofer}
            onClose={() => setState(prev => ({ ...prev, isCreateChofer: false }))}
          >
            <ModalBasicStyle
              title="Registro de Choferes"
              classNameTitle="text-gray-900"
              classNameContainer=""
            >
              <AddTarjetaCombustible
                form={form}
                onClose={() => setState(prev => ({ ...prev, isCreateChofer: false }))}
                onSubmit={onSubmit}
              />
            </ModalBasicStyle>
          </Modal>

          {state.permisoEscritura && (
            <div className="fixed right-0 bottom-0 m-5 z-50">
              <ModalButton
                className="bg-blue-900 rounded-4xl p-2 hover:bg-blue-700 transition duration-150 ease-in-out"
                onClick={() => setState(prev => ({ ...prev, isCreateChofer: true }))}
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

          <footer className="w-full fixed bottom-0 my-5">
            <div className="w-lg mx-auto flex justify-between items-center">
              <ModalButton
                disabled={!pagination?.hasPrevPage}
                onClick={() => handlePageChange('prev')}
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

              <div className="flex">
                <h4 className="mr-6">
                  Página Actual: {pagination?.currentPage}
                </h4>
                <h4 className="ml-6">
                  Última Página: {pagination?.totalPages}
                </h4>
              </div>

              <ModalButton
                disabled={!pagination?.hasNextPage}
                onClick={() => handlePageChange('next')}
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

          <Modal
            isOpen={state.isEditTarjetaCombustible}
            onClose={() => setState(prev => ({ ...prev, isEditTarjetaCombustible: false }))}
          >
            <ModalBasicStyle
              title="Editar Chofer"
              classNameTitle="text-gray-900"
              classNameContainer=""
            >
              {state.selectedTarjetaCombustible && (
                <UpdateTarjetaCombustible
                  id={state.selectedTarjetaCombustible.id}
                  form={form}
                  data={state.selectedTarjetaCombustible}
                  onClose={() => setState(prev => ({ ...prev, isEditTarjetaCombustible: false }))}
                  onSuccess={handleUpdateSuccess}
                />
              )}
            </ModalBasicStyle>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default TarjetasCombustible;
