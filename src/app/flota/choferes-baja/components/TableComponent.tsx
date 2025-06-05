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
import { areaSchemaPost } from "@/app/validations/frontend/area-trabajo.schema";
import { TarjetaBajaFront } from "@/app/types/tarjetas-baja-types";
import { ChoferBajaFront } from "@/app/types/chofer-baja.types";

type ChoferTableProps = {
  data: ChoferBajaFront[];
  access?: boolean;
  refetch: () => Promise<void>;
};

type DataDelete = {
  ci: string;
  nombre: string;
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

  const [dataDelete, setDataDelete] = useState<DataDelete>({
    ci: "",
    nombre: "",
  });

  const form = useForm<Inputs>({
    resolver: zodResolver(areaSchemaPost),
  });

  const { onDelete } = useApiDelete({});

  const onDeleteFuncion = (ci: string) => {
    onDelete({ url: `/api/choferes-despedidos/${ci}`, refetch });
  };

  return (
    <div className="w-full">
      <div className="p-6 rounded-2xl min-w-full mx-auto shadow-lg border bg-white overflow-auto">
        <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
          Listado de Choferes de Baja
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
                {access && (
                  <TableCell className="py-3 px-4 text-gray-700 w-[200px] whitespace-nowrap">
                    <ModalButton
                      className="inline-flex justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-800 sm:w-auto"
                      onClick={() => {
                        setDataDelete({
                          ci: data.ci,
                          nombre: data.nombre,
                        });
                        setOpenDeleteModal(true);
                      }}
                    >
                      Recontratar
                    </ModalButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Modal
          isOpen={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
        >
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                <h3 className="text-base font-semibold leading-6">
                  Recontratar el chofer con CI: {dataDelete.ci}
                </h3>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <ModalButton
                    children="Aceptar"
                    onClick={() => {
                      onDeleteFuncion(dataDelete.ci);
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
    </div>
  );
}
