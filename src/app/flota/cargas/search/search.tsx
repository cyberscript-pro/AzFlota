"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingSpinner from "@/app/components/loading";
import SidebarDashboard from "@/app/components/SidebarDashboard";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CargaBack,
  CargaFront,
  CargasCoincidenciasMapper,
} from "../mappers/cargas-coincidencias.mapper";

function Search() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CargaFront[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const folio = searchParams.get("f");
  const comprobante = searchParams.get("co");
  const chapa = searchParams.get("ch");
  const date = searchParams.get("d");

  const filtrarCargas = async (
    folio: string | null,
    comprobante: string | null,
    chapa: string | null,
    date: string | null
  ) => {
    try {
      setLoading(true);
      const { data }: { data: CargaBack[] } = await axios.get(
        `/api/control-cargas/filters?f=${folio}&co=${comprobante}&ch=${chapa}&d=${date}`
      );

      setData(CargasCoincidenciasMapper.fromApiToFront(data).dataFront);
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    filtrarCargas(folio, comprobante, chapa, date);
  }, [folio, comprobante, chapa, date]);

  return (
    <div className="flex w-full min-h-screen z-0">
      <SidebarDashboard />

      <div className="flex-1 flex flex-col pt-2">
        <div className="flex justify-between items-center">
          <button onClick={() => router.push("/flota/cargas/")}>
            <Image src="/back.svg" alt="Crear" width={50} height={50} />
          </button>
          <div></div>
        </div>

        <div className="mt-4 flex flex-col">
          {loading && <LoadingSpinner />}
          <div className="p-6 rounded-2xl min-w-full overflow-auto shadow-lg border bg-white">
            <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
              Coincidencias de Cargas
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
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                    Saldo Final
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.length > 0 ? (
                  data.map((dato, idx) => (
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
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {dato.existencia + dato.importe - dato.consumo_dinero}
                      </TableCell>
                    </TableRow>
                  ))
                ) : loading ? null : (
                  <TableRow className="pt-3 text-lg">
                    <TableCell>No hay coincidencias en su busqueda</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
