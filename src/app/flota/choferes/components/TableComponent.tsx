// components/UserTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChoferFront } from "../../../types/choferes-types";
import ModalButton from "../../../components/ModalButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { choferSchema } from "@/app/validations/frontend/chofer.schema";
import useApiDelete from "@/app/hooks/useApiDelete";
import { useState } from "react";
import Modal from "../../../components/modal";
import UpdateChofer from "../formularios/UpdateChofer";

type ChoferTableProps = {
  data: ChoferFront[];
  access?: boolean;
  refetch: () => Promise<void>;
};

type DataDelete = {
  idDelete: string;
  nombre: string;
};

export type DataUpdate = {
  nombre: string;
  edad: string;
  sexo: "M" | "F";
  ci: string;
  licencia: string;
  telefono: string;
};

export type Inputs = {
  nombre: string;
  edad: string;
  sexo: string;
  ci: string;
  licencia: string;
  telefono: string;
};

export function ChoferTable({
  data,
  access = false,
  refetch,
}: ChoferTableProps) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const [dataUpdate, setDataUpdate] = useState<DataUpdate>({
    nombre: "",
    edad: "",
    sexo: "M",
    ci: "",
    licencia: "",
    telefono: "",
  });

  const [dataDelete, setDataDelete] = useState<DataDelete>({
    idDelete: "",
    nombre: "",
  });

  const form = useForm<Inputs>({
    resolver: zodResolver(choferSchema),
  });

  const { onDelete } = useApiDelete();

  const onDeleteFuncion = (id: string) => {
    onDelete({ url: `/api/choferes/${id}` });
  };

  return (
    <div>
      <div className="p-6 rounded-2xl min-w-full mx-auto shadow-lg border bg-white overflow-auto">
        <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
          Lista de Choferes
        </h2>
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[300px]">
                Nombre y Apellidos
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                Edad
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                Sexo
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[100px]">
                Carnet de Identidad
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[100px]">
                Licencia de Conducción
              </TableHead>
              <TableHead className="text-gray-600 px-5 font-medium uppercase tracking-wide w-[100px]">
                Teléfono
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                Vehiculos asignados
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, idx) => (
              <TableRow
                key={data.ci}
                className={
                  idx % 2 === 0
                    ? "bg-white hover:bg-gray-50"
                    : "bg-gray-50 hover:bg-gray-100"
                }
              >
                <TableCell className="py-3 px-4 text-gray-700 w-[300px]">
                  {data.nombre}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[50px]">
                  {data.edad}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[50px]">
                  {data.sexo}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[100px]">
                  {data.ci}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[100px]">
                  {data.licencia}
                </TableCell>
                <TableCell className="py-3 px-6 text-gray-700 w-[100px]">
                  {data.telefono}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {data.vehiculos?.map((vehiculo) => vehiculo.chapa).join(", ")}
                </TableCell>
                {access && (
                  <TableCell className="py-3 px-4 text-gray-700 w-[100px]">
                    <ModalButton
                      className={`inline-flex mr-2 w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
                      onClick={() => {
                        setDataUpdate({
                          nombre: data.nombre,
                          edad: data.edad,
                          sexo: data.sexo,
                          ci: data.ci,
                          licencia: data.licencia,
                          telefono: data.telefono,
                        });
                        form.reset({
                          nombre: data.nombre,
                          edad: data.edad,
                          sexo: data.sexo,
                          ci: data.ci,
                          licencia: data.licencia,
                          telefono: data.telefono,
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
                          idDelete: data.ci,
                          nombre: data.nombre,
                        });
                        setOpenDeleteModal(true);
                      }}
                    >
                      Dar de Baja
                    </ModalButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Modal isOpen={openUpdateModal} onClose={() => setOpenUpdateModal(false)}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
              <h3 className="text-base font-semibold leading-6">
                Actualizacion del Chofer
              </h3>

              <UpdateChofer
                form={form}
                onClose={() => {
                  setOpenUpdateModal(false);
                  refetch();
                }}
                id={dataUpdate.ci}
                data={dataUpdate}
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
                    refetch();
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
