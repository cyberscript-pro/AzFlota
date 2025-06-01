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
import { VehiculoBack, VehiculoFront } from "@/app/types/vehiculo-types";
import { AreaTrabajoMapper } from "../mappers/area-trabajo.mapper";
import { AreaTrabajoBack, AreaTrabajoFront } from "@/app/types/area-types";

function Search() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AreaTrabajoFront[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const nombre = searchParams.get("no");
  const centro = searchParams.get("ce");
  const jefe = searchParams.get("je");

  const filtrarAreaTrabajo = async (
    nombre: string | null,
    centro: string | null,
    jefe: string | null
  ) => {
    try {
      setLoading(true);
      const { data }: { data: AreaTrabajoBack[] } = await axios.get(
        `/api/areas-trabajo/filters?no=${nombre}&ce=${centro}&je=${jefe}`
      );

      setData(AreaTrabajoMapper.fromApiToFront(data).dataFront);
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    filtrarAreaTrabajo(nombre, centro, jefe);
  }, [nombre, centro, jefe]);

  return (
    <div className="flex w-full min-h-screen z-0">
      <SidebarDashboard />

      <div className="flex-1 flex flex-col pt-2">
        <div className="flex justify-between items-center">
          <button onClick={() => router.push("/flota/area-trabajo/")}>
            <Image src="/back.svg" alt="Crear" width={50} height={50} />
          </button>
          <div></div>
        </div>

        <div className="mt-4 flex flex-col">
          {loading && <LoadingSpinner />}
          <div className="p-6 rounded-2xl min-w-full overflow-auto shadow-lg border bg-white">
            <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
              Coincidencias de Areas de Trabajo
            </h2>
            <Table className="min-w-full">
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[300px]">
                    Nombre del Area de Trabajo
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                    Centro de Costo
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                    Nombre y Apellidos del Jefe
                  </TableHead>
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[50px]">
                    Vehiculos Asignados
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.length > 0 ? (
                  data.map((data, idx) => (
                    <TableRow
                      key={data.id}
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
                        {data.centro_costo}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[50px]">
                        {data.jefe}
                      </TableCell>
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {data.vehiculos
                          ? data.vehiculos
                              ?.map((vehiculo) => vehiculo.chapa)
                              .join(", ")
                          : "No asignado"}
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
