import React, { useState } from "react";
import Image from "next/image";

import { ChoferFront } from "../utils/types";
import useApiDelete from "../../../hooks/useApiDelete";
import Modal from "@/app/flota/components/modal";
import FilaTable from "../../components/FilaTable";
import ModalButton from "../../components/ModalButton";
import UpdateChofer from "../formularios/UpdateChofer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { choferSchema } from "@/app/validations/frontend/chofer.schema";

type TableProps = {
  data?: ChoferFront[];
};

type DataDelete = {
  idDelete: string;
  nombre: string;
};

type DataUpdate = {
  id: string;
  nombre: string;
  ci: string;
  licencia: string;
};

export type Inputs = {
  nombre: string;
  ci: string;
  licencia: string;
};

function Table({ data }: TableProps) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const [dataUpdate, setDataUpdate] = useState<DataUpdate>({
    id: "",
    nombre: "",
    ci: "",
    licencia: "",
  });

  const [dataDelete, setDataDelete] = useState<DataDelete>({
    idDelete: "",
    nombre: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(choferSchema),
  });

  const columns = [
    "Nombre y Apellidos",
    "Carnet de Identidad",
    "Licencia de Conduccion",
  ];

  const { onDelete } = useApiDelete();

  const onDeleteFuncion = (id: string) => {
    onDelete({ url: `http://localhost:3000/api/choferes/${id}` });
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
                        className="px-6 py-3 text-left font-bold uppercase tracking-wider text-black"
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
                    data.map((chofer) => (
                      <tr key={chofer.id}>
                        <FilaTable>
                          <div className=" font-medium text-gray-900">
                            {chofer.nombre}
                          </div>
                        </FilaTable>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className=" text-gray-900">{chofer.ci}</div>
                        </td>
                        <FilaTable>
                          <div className=" text-gray-900">
                            {chofer.licencia}
                          </div>
                        </FilaTable>
                        <FilaTable>
                          <ModalButton
                            className={`inline-flex mr-2 w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
                            onClick={() => {
                              setDataUpdate({
                                id: chofer.id,
                                nombre: chofer.nombre,
                                ci: chofer.ci,
                                licencia: chofer.licencia,
                              });
                              reset({
                                nombre: chofer.nombre,
                                ci: chofer.ci,
                                licencia: chofer.licencia,
                              });
                              setOpenUpdateModal(true);
                            }}
                          >
                            Editar
                          </ModalButton>
                          <ModalButton
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-800 sm:mt-0 sm:w-auto"
                            onClick={() => {
                              setDataDelete({
                                idDelete: chofer.id,
                                nombre: chofer.nombre,
                              });
                              setOpenDeleteModal(true);
                            }}
                          >
                            Eliminar
                          </ModalButton>
                        </FilaTable>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <Modal isOpen={openUpdateModal} onClose={() => setOpenUpdateModal(false)}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
              <h3 className="text-base font-semibold leading-6">
                Actualizacion del Chofer
              </h3>

              <UpdateChofer
                errors={errors}
                onClose={() => setOpenUpdateModal(false)}
                register={register}
                handleSubmit={handleSubmit}
                id={dataUpdate.id}
                data={dataUpdate}
                reset
              />
            </div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
              <h3 className="text-base font-semibold leading-6">
                ¿Esta seguro que desea eliminar el Chofer?
              </h3>
              <h3 className="text-base font-semibold leading-6 text-red-500">
                {dataDelete.nombre}
              </h3>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <ModalButton
                  children="Aceptar"
                  onClick={() => {
                    onDeleteFuncion(dataDelete.idDelete);
                    setOpenDeleteModal(false);
                    window.location.reload();
                  }}
                  className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
                />
                <ModalButton
                  children="Cancelar"
                  onClick={() => {
                    setOpenDeleteModal(false);
                  }}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
