import React from "react";
import Image from "next/image";

import { TarjetaCombustibleFront } from "../utils/types";
import useApiDelete from "../../../hooks/useApiDelete";
import Modal from "@/app/flota/components/modal";
import FilaTable from "../../components/FilaTable";
import ModalButton from "../../components/ModalButton";

type TableProps = {
  data?: TarjetaCombustibleFront[];
};

function Table({ data }: TableProps) {
  const columns = [
    "Numero de Tarjeta",
    "Pin",
    "Estado",
    "Fecha de Vencimiento",
    "Acciones",
  ];

  const { onDelete, deleteSuccess, setDeleteSuccess } = useApiDelete();

  const onDeleteFuncion = (id: string) => {
    onDelete({ url: `http://localhost:3000/api/tarjetas-combustible/${id}` });
  };

  return (
    <div>
      <div className="bg-gray-50">
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {columns.map((column, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="px-6 py-3 text-left font-medium  uppercase tracking-wider text-black"
                      >
                        {column}
                      </th>
                    ))}
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data &&
                    data.map((tarjeta) => (
                      <tr key={tarjeta.id}>
                        <FilaTable>
                          <div className=" font-medium text-gray-900">
                            {tarjeta.numero}
                          </div>
                        </FilaTable>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className=" text-gray-900">{tarjeta.pin}</div>
                        </td>
                        <FilaTable>
                          <div className=" text-gray-900">{tarjeta.estado}</div>
                        </FilaTable>
                        <FilaTable>
                          <div className=" text-gray-900">
                            {tarjeta.fecha_vencimiento}
                          </div>
                        </FilaTable>
                        <FilaTable>
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            Editar
                          </button>
                          <button
                            onClick={() => onDeleteFuncion(tarjeta.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Eliminar
                          </button>
                        </FilaTable>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <Modal isOpen={deleteSuccess} onClose={() => setDeleteSuccess(false)}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
              <h3 className="text-base font-semibold leading-6 text-red-500">
                Chofer eliminado correctamente
              </h3>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <ModalButton
                  children="Aceptar"
                  onClick={() => {
                    setDeleteSuccess(false);
                    window.location.reload();
                  }}
                  className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Table;
