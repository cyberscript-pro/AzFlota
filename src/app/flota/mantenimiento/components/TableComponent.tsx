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
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useApiDelete from "@/app/hooks/useApiDelete";
import { useState } from "react";
import Modal from "../../../components/modal";
import { areaSchemaPost } from "@/app/validations/frontend/area-trabajo.schema";
import { VehiculoMantenimientoFront } from "@/app/types/mantenimiento-types";
import MantenimientoVehiculo from "../formularios/MantenimientoVehiculo";
import useApiUpdate from "@/app/hooks/useApiUpdate";
import { toast } from "sonner";
import { Description } from "@radix-ui/react-dialog";

type ChoferTableProps = {
  data: VehiculoMantenimientoFront[];
  access?: boolean;
  refetch: () => Promise<void>;
};

export function AreaTrabajoTable({
  data,
  access = false,
  refetch,
}: ChoferTableProps) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [dataUpdate, setDataUpdate] = useState<{
    chapa: string;
    inicio: string;
    uuid: string;
  }>({
    chapa: "",
    inicio: "",
    uuid: "",
  });
  const [dataDelete, setDataDelete] = useState<{
    chapa: string;
    uuid: string;
  }>({
    chapa: "",
    uuid: "",
  });

  const deleteVehiculo = async (uuid: string) => {
    try {

    }catch(error) {
      console.error("Error al enviar datos:", error);
    }
  }

  return (
    <div className="w-full">
      <div className="p-6 rounded-2xl min-w-full mx-auto shadow-lg border bg-white overflow-auto">
        <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
          Listado de Mantenimientos a Vehiculos
        </h2>
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[300px]">
                Vehiculo
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                Fecha Inicio
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                Fecha Fin
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                Descripcion
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
                  {data.vehiculo.chapa}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[50px]">
                  {data.inicio}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[50px]">
                  {data.fin}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {data.descripcion}
                </TableCell>
                {access && data.fin === null && (
                  <TableCell className="py-3 px-4 text-gray-700 w-[100px]">
                    <ModalButton
                      className={`inline-flex mr-2 w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
                      onClick={() => {
                        setDataUpdate({
                          chapa: data.vehiculo.chapa,
                          inicio: data.inicio,
                          uuid: data.id,
                        });
                        setOpenUpdateModal(true);
                      }}
                    >
                      Finalizar
                    </ModalButton>
                    <ModalButton
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-800 sm:mt-0 sm:w-auto"
                      onClick={() => {
                        setDataDelete({
                          chapa: data.vehiculo.chapa,
                          uuid: data.id,
                        })
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
                Finalizar Mantenimiento del Vehiculo
              </h3>
              <MantenimientoVehiculo
                onClose={() => setOpenUpdateModal(false)}
                onSuccess={() => {
                  setOpenUpdateModal(false);
                  refetch();
                }}
                id={dataUpdate.uuid}
                dataUpdate={{
                  chapa: dataUpdate.chapa,
                  inicio: dataUpdate.inicio,
                }}
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
                ¿Esta seguro que desea dar de baja el Vehiculo?
              </h3>
              <h3 className="text-base font-semibold leading-6 text-red-500">{dataDelete.chapa}</h3>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <ModalButton
                  children="Aceptar"
                  onClick={() => {
                    deleteVehiculo(dataDelete.uuid);
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
