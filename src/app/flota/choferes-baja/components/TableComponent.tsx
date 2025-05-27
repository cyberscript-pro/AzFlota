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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
