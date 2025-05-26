"use client";
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
import { VehiculoBack, VehiculoFront } from "@/app/types/vehiculo-types";
import { VehiculoMapper } from "../mappers/vehiculos.mapper";

function Search() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<VehiculoFront[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const marca = searchParams.get("m");
  const tipo = searchParams.get("t");
  const chapa = searchParams.get("ch");

  const filtrarVehiculos = async (
    marca: string | null,
    tipo: string | null,
    chapa: string | null
  ) => {
    try {
      setLoading(true);
      const { data }: { data: VehiculoBack[] } = await axios.get(
        `/api/vehiculos/filters?ch=${chapa}&m=${marca}&t=${tipo}`
      );

      setData(VehiculoMapper.fromApiToFront(data).dataFront);
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    filtrarVehiculos(marca, tipo, chapa);
  }, [marca, tipo, chapa]);

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
              Coincidencias de Vehiculos
            </h2>
            <Table className="min-w-full inset-0 z-0">
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
                        {dato.tarjeta?.numero}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {dato.chapa}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {dato.marca}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {dato.tipo}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {dato.consumo_km}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {dato.chofer?.nombre}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[300px]">
                        {dato.area?.jefe}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[300px]">
                        {dato.area?.nombre}
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
