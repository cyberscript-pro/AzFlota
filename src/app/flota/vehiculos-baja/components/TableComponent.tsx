import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AreaTrabajoFront } from "../../../types/area-types";
import ModalButton from "../../../components/ModalButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useApiDelete from "@/app/hooks/useApiDelete";
import { useState } from "react";
import Modal from "../../../components/modal";
import UpdateAreaTrabajo from "../formularios/UpdateAreaTrabajo";
import { areaSchemaPost } from "@/app/validations/frontend/area-trabajo.schema";

type ChoferTableProps = {
  data: AreaTrabajoFront[];
  access?: boolean;
  refetch: () => Promise<void>;
};

type DataDelete = {
  idDelete: string;
  nombre: string;
};

export type DataUpdate = {
  id: string;
  nombre: string;
  centro_costo: string;
  jefe: string;
};

export type Inputs = {
  nombre: string;
  centro_costo: string;
  jefe: string;
};

export function AreaTrabajoTable({
  data,
  access = false,
  refetch,
}: ChoferTableProps) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const [dataUpdate, setDataUpdate] = useState<DataUpdate>({
    id: "",
    nombre: "",
    centro_costo: "",
    jefe: "",
  });

  const [dataDelete, setDataDelete] = useState<DataDelete>({
    idDelete: "",
    nombre: "",
  });

  const form = useForm<Inputs>({
    resolver: zodResolver(areaSchemaPost),
  });

  const { onDelete } = useApiDelete();

  const onDeleteFuncion = (id: string) => {
    onDelete({ url: `/api/areas-trabajo/${id}` });
  };

  return (
    <div className="w-full">
      <div className="p-6 rounded-2xl min-w-full mx-auto shadow-lg border bg-white overflow-auto">
        <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
          Listado de Areas de Trabajo
        </h2>
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[300px]">
                Nombre del Area de Trabajo
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                Centro de Costo
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                Nombre y Apellidos del Jefe
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                Vehiculos Asignados
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, idx) => (
              <TableRow
                key={data.id}
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
                  {data.centro_costo}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[50px]">
                  {data.jefe}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {data.vehiculos
                    ? data.vehiculos
                        ?.map((vehiculo) => vehiculo.chapa)
                        .join(", ")
                    : "No asignado"}
                </TableCell>
                {access && (
                  <TableCell className="py-3 px-4 text-gray-700 w-[100px]">
                    <ModalButton
                      className={`inline-flex mr-2 w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
                      onClick={() => {
                        setDataUpdate({
                          id: data.id,
                          nombre: data.nombre,
                          centro_costo: data.centro_costo,
                          jefe: data.jefe,
                        });
                        form.reset({
                          nombre: data.nombre,
                          centro_costo: data.centro_costo,
                          jefe: data.jefe,
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
                          idDelete: data.id,
                          nombre: data.nombre,
                        });
                        setOpenDeleteModal(true);
                      }}
                    >
                      Eliminar
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
                Actualizacion del Area de Trabajo
              </h3>

              <UpdateAreaTrabajo
                form={form}
                onClose={() => {
                  setOpenUpdateModal(false);
                  refetch();
                }}
                id={dataUpdate.id}
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
                ¿Esta seguro que desea eliminar el Area de Trabajo?
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
