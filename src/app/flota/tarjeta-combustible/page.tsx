"use client";

import React, { useState } from "react";
import Image from "next/image";

import useApiGet from "../hooks/useApiGet";
import { TarjetaCombustible } from "./utils/types";
import Table from "./components/table";
import Modal from "@/app/flota/components/modal";
import FormDataPost from "./data/FormDataPost";
import ModalButton from "../components/ModalButton";
import ModalBasicStyle from "../components/ModalBasicStyle";
import ModalGenerateReporte from "./components/ModalGenerateReporte";
import GeneratePDF from "./utils/GeneratePDF";
import { GenerateExcel } from "./utils/GenerateExcel";
import { TarjetaCombustibleMapper } from "./mappers/tarjeta-combustible.mapper";
import AddTarjetaCombustible from "./formularios/AddTarjetaCombustible";

function Choferes() {
  const [isCreateTarjeta, setIsCreateTarjeta] = useState(false);
  const [isReporte, setIsReporte] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("pdf");
  const [pageActual, setPageActual] = useState(1);

  const { loading, error, data, pagination, statePage } =
    useApiGet<TarjetaCombustible>({
      url: `http://localhost:3000/api/tarjetas-combustible?page=${pageActual}&limit=${10}`,
    });

  const { dataFront } = TarjetaCombustibleMapper.fromApiToFront(data);

  const { dataMap } = TarjetaCombustibleMapper.fromApiToExcel(dataFront);

  const {
    register,
    handleSubmit,
    errors,
    submitSuccess,
    setSubmitSuccess,
    onSubmit,
  } = FormDataPost({ onClose: () => setIsCreateTarjeta(false) });

  if (!pagination) {
  }

  const { generatePDF } = GeneratePDF({ data: dataFront });

  const generateExcel = () => {
    GenerateExcel({
      data: dataMap,
      fileName: "reporte_choferes",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
  };

  const onGenerate = (value: string) => {
    if (value == "pdf") {
      generatePDF();
    } else if (value == "excel") {
      generateExcel();
    }
  };

  const onDisabledBack = (): boolean | undefined => {
    if (!pagination?.hasPrevPage) {
      return true;
    }
  };

  const onDisabledNext = (): boolean | undefined => {
    if (!pagination?.hasNextPage) {
      return true;
    }
  };

  if (error) {
    return <div>Error {error}</div>;
  }

  return (
    <div className="w-full min-h-screen z-0">
      <header className="fixed w-full bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Gestion de Tarjetas de Combustible
          </h1>
          <div className="flex">
            <button
              onClick={() => setIsReporte(true)}
              className="mr-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
            >
              Generar Reporte
            </button>
          </div>
        </div>
      </header>

      <div className="w-full h-10"></div>

      <main className="mt-2 h-[100vh-40px]">
        <Table data={dataFront} />
      </main>

      <footer className="w-full fixed bottom-0 my-5">
        <div className="w-lg mx-auto flex justify-between items-center">
          <ModalButton
            disabled={onDisabledBack()}
            onClick={() => {
              setPageActual(Number(pagination?.currentPage) - 1);
              statePage(pageActual);
            }}
            className={`inline-flex w-full justify-center items-center border-2 border-black rounded-4xl text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto`}
          >
            <Image
              className=""
              src="/back.svg"
              alt="Back"
              width={50}
              height={50}
            />
          </ModalButton>

          <div className="flex">
            <h4 className="mr-6">Pagina Actual: {pagination?.currentPage}</h4>
            <h4 className="ml-6">Ultima Pagina: {pagination?.totalPages}</h4>
          </div>

          <ModalButton
            disabled={onDisabledNext()}
            onClick={() => {
              setPageActual(Number(pagination?.currentPage) + 1);
              statePage(pageActual);
            }}
            className={`inline-flex w-full justify-center items-center border-2 border-black rounded-4xl text-white shadow-sm sm:ml-3 sm:w-auto`}
          >
            <Image
              className=""
              src="/next.svg"
              alt="Next"
              width={50}
              height={50}
            />
          </ModalButton>
        </div>
      </footer>

      {loading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="fixed inset-0 bg-opacity-50 transition-opacity" />
          <Image
            className=""
            src="/loading.svg"
            alt="Loading"
            width={100}
            height={100}
          />
        </div>
      )}

      <ModalGenerateReporte
        isOpen={isReporte}
        onClose={() => setIsReporte(false)}
        selectedValue={selectedValue}
        onChange={handleChange}
        radioButtonProps={[
          {
            title: "Reporte en PDF",
            name: "reporte",
            value: "pdf",
          },
          {
            title: "Reporte en Excel",
            name: "reporte",
            value: "excel",
          },
        ]}
        onClickReporte={() => {
          onGenerate(selectedValue);
          setIsReporte(false);
        }}
        onClickCancelar={() => setIsReporte(false)}
      />

      <Modal isOpen={isCreateTarjeta} onClose={() => setIsCreateTarjeta(false)}>
        <ModalBasicStyle
          title="Registro de Tarjetas de Combustible"
          classNameTitle="text-gray-900"
          classNameContainer=""
        >
          <AddTarjetaCombustible
            errors={errors}
            onClose={() => setIsCreateTarjeta(false)}
            register={register}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </ModalBasicStyle>
      </Modal>

      <Modal isOpen={submitSuccess} onClose={() => setSubmitSuccess(false)}>
        <ModalBasicStyle
          title="Chofer creado correctamente"
          classNameTitle="text-green-500"
          classNameContainer=""
        >
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <ModalButton
              children="Aceptar"
              className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
              onClick={() => {
                setSubmitSuccess(false);
                window.location.reload();
              }}
            />
          </div>
        </ModalBasicStyle>
      </Modal>

      <div className="fixed right-0 bottom-0 m-5">
        <ModalButton
          className={`bg-blue-900 rounded-4xl p-2 hover:bg-blue-700 transition duration-150 ease-in-out`}
          onClick={() => setIsCreateTarjeta(true)}
        >
          <Image
            className=""
            src="/add.svg"
            alt="Crear"
            width={50}
            height={50}
          />
        </ModalButton>
      </div>
    </div>
  );
}

export default Choferes;
