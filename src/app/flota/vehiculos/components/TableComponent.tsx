import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DataViajesFront,
  Inputs,
  VehiculoFront,
} from "../../../types/vehiculo-types";
import ModalButton from "../../../components/ModalButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useApiDelete from "@/app/hooks/useApiDelete";
import { useEffect, useState } from "react";
import Modal from "../../../components/modal";
import UpdateAreaTrabajo from "../formularios/UpdateVehiculo";
import { vehiculoSchemaUpdate } from "@/app/validations/frontend/vehiculo-update.schema";
import { vehiculoSchemaPost } from "@/app/validations/frontend/vehiculo-post.schema";
import useApiGet from "@/app/hooks/useApiGet";
import LoadingSpinner from "@/app/components/loading";
import axios from "axios";
import { VehiculoMapper } from "../mappers/vehiculos.mapper";
import MantenimientoVehiculo from "../formularios/MantenimientoVehiculo";
import { useRouter } from "next/navigation";

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
  chapa: string;
  marca: string;
  tipo: string;
  consumo_km: string;
  chofer: string;
  tarjeta: string;
  area: string;
};

export function AreaTrabajoTable({
  data,
  access = false,
  refetch,
}: ChoferTableProps) {
  const router = useRouter();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openViajesModal, setOpenViajesModal] = useState(false);
  const [chapa, setChapa] = useState("");
  const [dataViajes, setDataViajes] = useState<DataViajesFront[]>();

  const buscarViajes = async (chapa: string) => {
    try {
      const { data } = await axios.get(
        `/api/viajes-vehiculo?chapa=${encodeURIComponent(chapa)}`
      );

      return data;
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    }
  };

  useEffect(() => {
    if (openViajesModal) {
      buscarViajes(chapa).then((data) => {
        const datos = VehiculoMapper.fromApiViajestoFront(data).dataFront;
        setDataViajes(datos);
      });
    }
  }, [openViajesModal]);

  const [dataUpdate, setDataUpdate] = useState<DataUpdate>({
    chapa: "",
    marca: "",
    tipo: "",
    consumo_km: "",
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

  const onSubmitData: SubmitHandler<{
    inicio: string;
    motivo: string;
  }> = async (data) => {
    try {
      await onDelete({ url: `/api/vehiculos/${dataDelete.chapa}`, data });
      setOpenDeleteModal(false);
      refetch();
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div>
      <div className="p-6 rounded-2xl min-w-full mx-auto shadow-lg border bg-white overflow-auto">
        <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
          Listado de Vehiculos
        </h2>
        <Table className="min-w-full">
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
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                Consumo por Litro
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
                key={idx}
                className={
                  idx % 2 === 0
                    ? "bg-white hover:bg-gray-50"
                    : "bg-gray-50 hover:bg-gray-100"
                }
              >
                <TableCell
                  className="py-3 px-4 text-gray-700 w-[200px]"
                  onClick={() => {
                    setChapa(data.chapa);
                    router.push(`/flota/vehiculos/viajes?ch=${data.chapa}`);
                  }}
                >
                  {data.tarjeta?.estado === "Blocked" ? (
                    <div className="text-red-600">Baja</div>
                  ) : (
                    data.tarjeta?.numero
                  )}
                </TableCell>
                <TableCell
                  className="py-3 px-4 text-gray-700 w-[200px]"
                  onClick={() => {
                    setChapa(data.chapa);
                    router.push(`/flota/vehiculos/viajes?ch=${data.chapa}`);
                  }}
                >
                  {data.chapa}
                </TableCell>
                <TableCell
                  className="py-3 px-4 text-gray-700 w-[200px]"
                  onClick={() => {
                    setChapa(data.chapa);
                    router.push(`/flota/vehiculos/viajes?ch=${data.chapa}`);
                  }}
                >
                  {data.marca}
                </TableCell>
                <TableCell
                  className="py-3 px-4 text-gray-700 w-[200px]"
                  onClick={() => {
                    setChapa(data.chapa);
                    router.push(`/flota/vehiculos/viajes?ch=${data.chapa}`);
                  }}
                >
                  {data.tipo}
                </TableCell>
                <TableCell
                  className="py-3 px-4 text-gray-700 w-[200px]"
                  onClick={() => {
                    setChapa(data.chapa);
                    router.push(`/flota/vehiculos/viajes?ch=${data.chapa}`);
                  }}
                >
                  {data.consumo_km} kilometros
                </TableCell>
                <TableCell
                  className="py-3 px-4 text-gray-700 w-[300px]"
                  onClick={() => {
                    setChapa(data.chapa);
                    router.push(`/flota/vehiculos/viajes?ch=${data.chapa}`);
                  }}
                >
                  {data.chofer.isAvailable ? (
                    data.chofer.nombre
                  ) : (
                    <div className="text-red-600">Dado de Baja</div>
                  )}
                </TableCell>
                <TableCell
                  className="py-3 px-4 text-gray-700 w-[300px]"
                  onClick={() => {
                    setChapa(data.chapa);
                    router.push(`/flota/vehiculos/viajes?ch=${data.chapa}`);
                  }}
                >
                  {data.area?.jefe}
                </TableCell>
                <TableCell
                  className="py-3 px-4 text-gray-700 w-[200px]"
                  onClick={() => {
                    setChapa(data.chapa);
                    router.push(`/flota/vehiculos/viajes?ch=${data.chapa}`);
                  }}
                >
                  {data.area?.nombre}
                </TableCell>
                {access && (
                  <TableCell className="py-3 px-4 text-gray-700 w-[100px]">
                    <ModalButton
                      className={`inline-flex mr-2 w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
                      onClick={() => {
                        setDataUpdate({
                          chapa: data.chapa,
                          marca: data.marca,
                          tipo: data.tipo,
                          consumo_km: data.consumo_km,
                          chofer: data.chofer.nombre,
                          tarjeta: data.tarjeta.numero,
                          area: data.area.nombre,
                        });
                        form.reset({
                          chapa: data.chapa,
                          marca: data.marca,
                          tipo: data.tipo,
                          consumo_km: data.consumo_km,
                          chofer: data.chofer.ci,
                          tarjeta: data.tarjeta.numero,
                          area: data.area.uuid,
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
                          idDelete: data.chapa,
                          chapa: data.chapa,
                        });
                        setOpenDeleteModal(true);
                      }}
                    >
                      Iniciar Mantenimiento
                    </ModalButton>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal
        isOpen={openViajesModal}
        onClose={() => setOpenViajesModal(false)}
        isCloseonClick={false}
      >
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full"></div>
          </div>
        </div>
      </Modal>

      <Modal isOpen={openUpdateModal} onClose={() => setOpenUpdateModal(false)}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
              <h3 className="text-base font-semibold leading-6">
                Actualizacion del Vehiculo
              </h3>

              <UpdateAreaTrabajo
                form={form}
                onClose={() => {
                  setOpenUpdateModal(false);
                  refetch();
                }}
                id={dataUpdate.chapa}
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
                ¿Esta seguro que desea pasar a mantenimiento el vehiculo?
              </h3>
              <h3 className="text-base font-semibold leading-6 text-red-500">
                {dataDelete.chapa}
              </h3>
              <MantenimientoVehiculo
                onClose={() => {
                  setOpenDeleteModal(false);
                  refetch();
                }}
                onSubmit={onSubmitData}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
