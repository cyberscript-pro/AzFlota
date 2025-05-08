// components/UserTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { VehiculoFront } from "../../../types/vehiculo-types";
import ModalButton from "../../../components/ModalButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useApiDelete from "@/app/hooks/useApiDelete";
import { useState } from "react";
import Modal from "../../../components/modal";
import UpdateAreaTrabajo from "../formularios/UpdateVehiculo";
import { vehiculoSchemaUpdate } from "@/app/validations/frontend/vehiculo-update.schema";
import { vehiculoSchemaPost } from "@/app/validations/frontend/vehiculo-post.schema";

type ChoferTableProps = {
  data: VehiculoFront[];
  access?: boolean;
  refetch: () => Promise<void>;
};

type DataDelete = {
  idDelete: string;
  chapa: string;
};

export type DataUpdate = {
  id: string;
  chapa: string;
  marca: string;
  tipo: string;
  chofer: string;
  tarjeta: string;
  area: string;
};

export type Inputs = {
  chapa: string;
  marca: string;
  tipo: string;
  chofer: string;
  tarjeta: string;
  area: string;
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
    chapa: "",
    marca: "",
    tipo: "",
    chofer: "",
    tarjeta: "",
    area: "",
  });

  const [dataDelete, setDataDelete] = useState<DataDelete>({
    idDelete: "",
    chapa: "",
  });

  const form = useForm<Inputs>({
    resolver: zodResolver(vehiculoSchemaPost),
  });

  const { onDelete } = useApiDelete();

  const onDeleteFuncion = (id: string) => {
    onDelete({ url: `/api/areas-trabajo/${id}` });
  };

  return (
    <div>
      <div className="p-6 rounded-2xl max-w-fit mx-auto shadow-lg border bg-white overflow-auto">
        <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
          Listado de Vehiculos
        </h2>
        <Table className="min-w-[600px]">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                Tarjeta
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                Chapa
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                Marca
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                Tipo
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[300px]">
                Chofer
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[300px]">
                Jefe
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                Area de Trabajo
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
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {data.tarjeta?.numero}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {data.chapa}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {data.marca}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {data.tipo}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[300px]">
                  {data.chofer?.nombre}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[300px]">
                  {data.area?.jefe}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {data.area?.nombre}
                </TableCell>
                {access && (
                  <TableCell className="py-3 px-4 text-gray-700 w-[100px]">
                    <ModalButton
                      className={`inline-flex mr-2 w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
                      onClick={() => {
                        setDataUpdate({
                          id: data.id,
                          chapa: data.chapa,
                          marca: data.marca,
                          tipo: data.tipo,
                          chofer: data.chofer.nombre,
                          tarjeta: data.tarjeta.numero,
                          area: data.area.nombre,
                        });
                        form.reset({
                          chapa: data.chapa,
                          marca: data.marca,
                          tipo: data.tipo,
                          chofer: data.chofer.nombre,
                          tarjeta: data.tarjeta.numero,
                          area: data.area.nombre,
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
                          chapa: data.chapa,
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
                {dataDelete.chapa}
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
