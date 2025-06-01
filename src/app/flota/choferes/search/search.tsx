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
import { ChoferMapper } from "../mappers/chofer.mapper";
import { Chofer, ChoferFront } from "@/app/types/choferes-types";

function Search() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ChoferFront[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();

  const nombre = searchParams.get("name");
  const edad = searchParams.get("age");
  const sexo = searchParams.get("sexo");
  const ci = searchParams.get("ci");
  const licencia = searchParams.get("licencia");
  const telefono = searchParams.get("telefono");

  const filtrarChoferes = async (
    nombre: string | null,
    edad: string | null,
    sexo: string | null,
    ci: string | null,
    licencia: string | null,
    telefono: string | null
  ) => {
    try {
      setLoading(true);
      const { data }: { data: Chofer[] } = await axios.get(
        `/api/choferes/filters?name=${nombre}&age=${edad}&sexo=${sexo}&ci=${ci}&licencia=${licencia}&telefono=${telefono}`
      );

      setData(ChoferMapper.fromApiToFront(data).dataFront);
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    filtrarChoferes(nombre, edad, sexo, ci, licencia, telefono);
  }, [nombre, edad, sexo, ci, licencia, telefono]);

  return (
    <div className="flex w-full min-h-screen z-0">
      <SidebarDashboard />

      <div className="flex-1 flex flex-col pt-2">
        <div className="flex justify-between items-center">
          <button onClick={() => router.push("/flota/choferes/")}>
            <Image src="/back.svg" alt="Crear" width={50} height={50} />
          </button>
          <div></div>
        </div>

        <div className="mt-4 flex flex-col">
          {loading && <LoadingSpinner />}
          <div className="p-6 rounded-2xl min-w-full overflow-auto shadow-lg border bg-white">
            <h2 className="mt-2 text-xl font-semibold mb-4 text-gray-800">
              Coincidencias de Choferes
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
                  <TableHead className="text-gray-600 font-medium uppercase tracking-wide w-[200px]">
                    Vehiculos asignados
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.length > 0 ? (
                  data.map((data, idx) => (
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
                      <TableCell className="py-3 px-4 text-gray-700 w-[200px]">
                        {data.vehiculos
                          ?.map((vehiculo) => vehiculo.chapa)
                          .join(", ")}
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
