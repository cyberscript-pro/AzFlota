// components/UserTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ModalButton from "../../../components/ModalButton";
import useApiDelete from "@/app/hooks/useApiDelete";
import { useState } from "react";
import Modal from "../../../components/modal";
import { CargaFront } from "@/app/types/cargas-types";

type ChoferTableProps = {
  data: CargaFront[];
  access?: boolean;
  refetch: () => Promise<void>;
};

type DataDelete = {
  idDelete: string;
  folio: string;
  comprobante: string;
  chapa: string;
};

export function CargasTable({
  data,
  access = false,
  refetch,
}: ChoferTableProps) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [dataDelete, setDataDelete] = useState<DataDelete>({
    idDelete: "",
    folio: "",
    comprobante: "",
    chapa: "",
  });

  const { onDelete } = useApiDelete();

  const onDeleteFuncion = (id: string) => {
    onDelete({ url: `/api/control-cargas/${id}` });
  };

  return (
    <div>
      <div className="p-6 rounded-2xl min-w-full overflow-auto shadow-lg border bg-white">
        <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
          Listado de Cargas
        </h2>
        <Table className="min-w-full inset-0 z-0">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[150px]">
                Vehiculo
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[50px]">
                Folio
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                Comprobante
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                Fecha
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                Existencia Inicial
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                Importe
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                Total
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                Consumo en $
              </TableHead>
              <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                Consumo en Litros
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((dato, idx) => (
              <TableRow
                key={idx}
                className={
                  idx % 2 === 0
                    ? "bg-white hover:bg-gray-50"
                    : "bg-gray-50 hover:bg-gray-100"
                }
              >
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {dato.vehiculo.chapa}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {dato.folio}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {dato.comprobante}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {dato.fecha}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {dato.existencia}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {dato.importe}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[300px]">
                  {dato.existencia + dato.importe}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[300px]">
                  {dato.consumo_dinero}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                  {Math.ceil(dato.consumo_dinero / 13.9)}
                </TableCell>
                {/* {access && idx + 1 == data.length && (
                  <TableCell className="py-3 px-4 text-gray-700 w-[100px]">
                    <ModalButton
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-800 sm:mt-0 sm:w-auto"
                      onClick={() => {
                        setDataDelete({
                          idDelete: dato.id,
                          folio: dato.folio,
                          comprobante: dato.comprobante,
                          chapa: dato.vehiculo.chapa,
                        });
                        setOpenDeleteModal(true);
                      }}
                    >
                      Eliminar
                    </ModalButton>
                  </TableCell>
                )} */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal isOpen={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
              <h3 className="text-base font-semibold leading-6">
                ¿Esta seguro que desea eliminar la Carga de Combustible?
              </h3>
              <h3 className="text-base font-semibold leading-6 text-red-500">
                Con el siguiente folio: {dataDelete.folio}
                <br />
                Con el siguiente comprobante: {dataDelete.comprobante}
                <br />
                Realizada al vehiculo con chapa: {dataDelete.chapa}
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
