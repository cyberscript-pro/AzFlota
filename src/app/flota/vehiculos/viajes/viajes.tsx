import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useApiGet from "../../../hooks/useApiGet";
import SidebarDashboard from "@/app/components/SidebarDashboard";
import LoadingSpinner from "@/app/components/loading";
import { DataViajesBack, DataViajesFront } from "@/app/types/vehiculo-types";
import { VehiculoMapper } from "../mappers/vehiculos.mapper";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

function Viajes() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [dataViajes, setData] = useState<DataViajesFront[]>([]);
  const search = useSearchParams();
  const chapa = search.get("ch");

  if (!chapa) return <div>Chapa no encontrada</div>;

  const viajesVehiculos = async (chapa: string | null) => {
    try {
      setLoading(true);
      const { data }: { data: DataViajesBack[] } = await axios.get(
        `/api/viajes-vehiculo?chapa=${chapa}`
      );

      setData(VehiculoMapper.fromApiViajestoFront(data).dataFront);
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    viajesVehiculos(chapa);
  }, [chapa]);

  return (
    <div className="flex w-full min-h-screen z-0">
      <SidebarDashboard />

      <div className="flex-1 flex flex-col pt-2">
        <div className="flex justify-between items-center">
          <button onClick={() => router.push("/flota/vehiculos/")}>
            <Image src="/back.svg" alt="Crear" width={50} height={50} />
          </button>
          <div></div>
        </div>

        <div className="mt-4 flex flex-col">
          {loading && <LoadingSpinner />}
          <div className="p-6 rounded-2xl min-w-full overflow-auto shadow-lg border bg-white">
            <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
              Viajes del Vehiculo con chapa: {chapa}
            </h2>
            <Table className="min-w-full inset-0 z-0">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                    Vehiculo
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                    Fecha Salida
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                    Fecha Llegada
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[300px]">
                    Lugar de Salida
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[300px]">
                    Lugar de Destino
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[300px]">
                    Km Recorridos
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                    Consumo de Combustible
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataViajes.length > 0 ? (
                  dataViajes.map((data, idx) => (
                    <TableRow
                      key={idx}
                      className={
                        idx % 2 === 0
                          ? "bg-white hover:bg-gray-50"
                          : "bg-gray-50 hover:bg-gray-100"
                      }
                    >
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {data.vehiculoChapa}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {data.fechaSalida}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {data.fechaLlegada}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {data.lugarSalida}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {data.lugarDestino}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {data.kmRecorridos}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {data.combustibleConsumido} litros
                      </TableCell>
                    </TableRow>
                  ))
                ) : loading ? null : (
                  <TableRow className="pt-3 text-lg">
                    <TableCell>
                      No hay viajes realizados por este vehiculo
                    </TableCell>
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

export default Viajes;
