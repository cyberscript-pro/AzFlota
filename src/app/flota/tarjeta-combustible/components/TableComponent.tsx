// components/UserTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { InputsUpdate, TarjetaFront } from "../../../types/tarjeta-types";
import ModalButton from "../../../components/ModalButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useApiDelete from "@/app/hooks/useApiDelete";
import { useState } from "react";
import Modal from "../../../components/modal";
import UpdateTarjetaCombustible from "../formularios/UpdateTarjetaCombustible";
import {
  tarjetaSchemaPost,
  tarjetaSchemaUpdate,
} from "@/app/validations/frontend/tarjeta-post.schema";
import useApiPost from "@/app/hooks/useApiPost";

type TarjetaCombustibleTableProps = {
  data: TarjetaFront[];
  access?: boolean;
  refetch: () => Promise<void>;
};

type DataDelete = {
  idDelete: string;
  numero: string;
};

export type DataUpdate = {
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
  saldo: string;
  tipo: string;
};

function mapStatus(backendStatus: string) {
  switch (backendStatus) {
    case "Activa":
      return "Active";
    case "Inactiva":
      return "Inactive";
    case "Bloqueada":
      return "Blocked";
    case "Expirada":
      return "Expired";
    default:
      return backendStatus;
  }
}

export function TarjetaCombustibleTable({
  data,
  access = false,
  refetch,
}: TarjetaCombustibleTableProps) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);

  const [dataUpdate, setDataUpdate] = useState<DataUpdate>({
    numero: "",
    pin: "",
    estado: "",
    fecha_vencimiento: "",
    saldo: "",
    tipo: "",
  });

  const [dataDelete, setDataDelete] = useState<DataDelete>({
    idDelete: "",
    numero: "",
  });

  const form = useForm<InputsUpdate>({
    resolver: zodResolver(tarjetaSchemaUpdate),
  });

  const { onSubmitData, loadingPost, submitSuccess, setSubmitSuccess } =
    useApiPost<{ tarjeta: string }>({
      url: "/api/tarjetas-combustible-baja/",
      onClose: () => setOpenDeleteModal(false),
      reset: form.reset,
    });

  const { onDelete } = useApiDelete({});

  const onDeleteFuncion = (id: string) => {
    onSubmitData({
      tarjeta: id,
    });
    if (!loadingPost) {
      onDelete({ url: `/api/tarjetas-combustible/${id}` });
    }
  };

  return (
    <div>
      <div className="p-6 rounded-2xl min-w-full mx-auto shadow-lg border bg-white overflow-auto">
        <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
          Lista de Tarjetas de Combustible
        </h2>
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="py-3 px-4 text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                Numero de Tarjeta
              </TableHead>
              <TableHead className="py-3 px-4 text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                Pin
              </TableHead>
              <TableHead className="py-3 px-4 text-gray-600 text-center font-medium uppercase tracking-wide w-[200px]">
                Tipo de Combustible
              </TableHead>
              <TableHead className="py-3 px-4 text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                Estado
              </TableHead>
              <TableHead className="py-3 px-4 text-gray-600 font-medium uppercase tracking-wide w-[100px]">
                Fecha de Vencimiento
              </TableHead>
              <TableHead className="py-3 px-4 text-gray-600 font-medium uppercase tracking-wide w-[100px]">
                Saldo
              </TableHead>
              <TableHead className="py-3 px-4 text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                Vehiculo Asignado
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, idx) => (
              <TableRow
                key={data.numero}
                className={
                  idx % 2 === 0
                    ? "bg-white hover:bg-gray-50"
                    : "bg-gray-50 hover:bg-gray-100"
                }
              >
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {data.numero}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[50px]">
                  {data.pin}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {data.tipo}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[50px]">
                  {data.estado}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[100px]">
                  {data.fecha_vencimiento}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[100px]">
                  {data.saldo}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {data.vehiculo ? data.vehiculo.chapa : "No Asignada"}
                </TableCell>
                {access && (
                  <TableCell className="py-3 px-4 text-gray-700 w-[100px]">
                    <ModalButton
                      className={`inline-flex mr-2 w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
                      onClick={() => {
                        setDataUpdate({
                          numero: data.numero,
                          pin: data.pin,
                          estado: data.estado,
                          fecha_vencimiento: data.fecha_vencimiento,
                          saldo: data.saldo,
                          tipo: data.tipo,
                        });
                        form.reset({
                          pin: data.pin,
                          estado: mapStatus(data.estado),
                          fecha_vencimiento: data.fecha_vencimiento,
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
                          idDelete: data.numero,
                          numero: data.numero,
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
                Actualizacion de la Tarjeta de Combustible
              </h3>

              <UpdateTarjetaCombustible
                form={form}
                onClose={() => {
                  setOpenUpdateModal(false);
                  refetch();
                }}
                numero={dataUpdate.numero}
                tipo={dataUpdate.tipo}
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
                ¿Esta seguro que desea dar de baja la Tarjeta?
              </h3>
              <h3 className="text-base font-semibold leading-6 text-red-500">
                {dataDelete.numero}
              </h3>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <ModalButton
                  children={loadingPost ? "Dando de Baja" : "Aceptar"}
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
