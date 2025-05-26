import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import LoadingSpinner from "@/app/components/loading";
import SidebarDashboard from "@/app/components/SidebarDashboard";
import SearchBar from "../components/Search";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tarjeta, TarjetaFront } from "@/app/types/tarjeta-types";
import { TarjetaCombustibleMapper } from "../mappers/tarjeta-combustible.mapper";

function Search() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TarjetaFront[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const numero = searchParams.get("n");
  const estado = searchParams.get("e");
  const tipo = searchParams.get("t");
  const fecha = searchParams.get("d");

  const filtrarTarjetas = async (
    numero: string | null,
    estado: string | null,
    tipo: string | null,
    fecha: string | null
  ) => {
    try {
      setLoading(true);
      const { data }: { data: Tarjeta[] } = await axios.get(
        `/api/tarjetas-combustible/filters?n=${numero}&e=${estado}&t=${tipo}&d=${fecha}`
      );

      setData(TarjetaCombustibleMapper.fromApiToFront(data).dataFront);
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    filtrarTarjetas(numero, estado, tipo, fecha);
  }, [numero, estado, tipo, fecha]);

  return (
    <div className="flex w-full min-h-screen z-0">
      <SidebarDashboard />

      <div className="flex-1 flex flex-col pt-2">
        <div className="flex justify-between items-center">
          <button onClick={() => router.push("/flota/tarjeta-combustible/")}>
            <Image src="/back.svg" alt="Crear" width={50} height={50} />
          </button>
          <div></div>
        </div>

        <div className="mt-4 flex flex-col">
          {loading && <LoadingSpinner />}
          <div className="p-6 rounded-2xl min-w-full overflow-auto shadow-lg border bg-white">
            <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
              Coincidencias de Tarjetas de Combustible
            </h2>
            <Table className="min-w-full inset-0 z-0">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[150px]">
                    Numero
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[50px]">
                    Pin
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                    Estado
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                    Tipo
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                    Fecha de Vencimiento
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide min-w-[100px]">
                    Vehiculo
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
                        {dato.numero}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {dato.pin}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {dato.estado}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {dato.tipo}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {dato.fecha_vencimiento}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {dato.vehiculo ? dato.vehiculo.chapa : "No Asignada"}
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
