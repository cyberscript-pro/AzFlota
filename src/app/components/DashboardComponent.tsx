import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import LogoutButton from "./LogoutComponent";
import UserButton from "./UserComponent";
import { Chofer } from "../types/choferes-types";
import { VehiculoBack } from "../types/vehiculo-types";
import { AreaTrabajoBack } from "../types/area-types";
import { Tarjeta } from "../types/tarjeta-types";
import { CargaBack } from "../types/cargas-types";
import { VehiculoMantenimientoBack } from "../types/mantenimiento-types";
import { useQuery } from "@tanstack/react-query";
import { TarjetaBaja } from "../types/tarjetas-baja-types";
import { VehiculoBaja } from "../types/vehiculo-baja-types";
import LoadingSpinner from "./loading";

type DashboardComponentProps = {
  role?: string;
  name?: string;
};

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Network response was not ok");
  const result = await response.json();
  return result.data;
}

export default function DashboardComponent({
  role,
  name,
}: DashboardComponentProps) {
  const [openUser, setOpenUser] = useState(false);

  const [shouldFetch, setShouldFetch] = useState(false);

  const areasQuery = useQuery<AreaTrabajoBack[]>({
    queryKey: ["areas"],
    queryFn: () => fetchData<AreaTrabajoBack[]>("/api/areas-trabajo"),
    enabled: shouldFetch,
  });

  const choferesQuery = useQuery<Chofer[]>({
    queryKey: ["choferes"],
    queryFn: () => fetchData<Chofer[]>("/api/choferes"),
    enabled: shouldFetch,
  });

  const tarjetasQuery = useQuery<Tarjeta[]>({
    queryKey: ["tarjetas"],
    queryFn: () => fetchData<Tarjeta[]>("/api/tarjetas-combustible"),
    enabled: shouldFetch,
  });

  const vehiculosQuery = useQuery<VehiculoBack[]>({
    queryKey: ["vehiculos"],
    queryFn: () => fetchData<VehiculoBack[]>("/api/vehiculos"),
    enabled: shouldFetch,
  });

  const cargasQuery = useQuery<CargaBack[]>({
    queryKey: ["cargas"],
    queryFn: () => fetchData<CargaBack[]>("/api/control-cargas"),
    enabled: shouldFetch,
  });

  const mantenimientoQuery = useQuery<VehiculoMantenimientoBack[]>({
    queryKey: ["mantenimiento"],
    queryFn: () =>
      fetchData<VehiculoMantenimientoBack[]>("/api/vehiculos-mantenimiento"),
    enabled: shouldFetch,
  });

  const tarjetasBajaQuery = useQuery<TarjetaBaja[]>({
    queryKey: ["tarjetas_baja"],
    queryFn: () => fetchData<TarjetaBaja[]>("/api/tarjetas-combustible-baja"),
    enabled: shouldFetch,
  });

  const vehiculosBajaQuery = useQuery<VehiculoBaja[]>({
    queryKey: ["vehiculos_baja"],
    queryFn: () => fetchData<VehiculoBaja[]>("/api/vehiculos-baja"),
    enabled: shouldFetch,
  });

  const choferesBajaQuery = useQuery<Chofer[]>({
    queryKey: ["choferes_baja"],
    queryFn: () => fetchData<Chofer[]>("/api/choferes-despedidos"),
    enabled: shouldFetch,
  });

  useEffect(() => {
    setShouldFetch(true);
  }, []);

  const datosAgrupados = [];
  const mantenimientosData = [];

  if (cargasQuery.data) {
    datosAgrupados.push(...agruparPorMesYCombustible(cargasQuery.data));
  }

  if (mantenimientoQuery.data) {
    mantenimientosData.push(
      ...agruparPorMesYMantenimiento(mantenimientoQuery.data)
    );
  }

  const cards = [
    {
      title: "Choferes Registrados",
      value: choferesQuery.data?.length,
      color: "bg-gradient-to-r from-indigo-500 to-purple-500",
      loading: choferesQuery.isLoading,
    },
    {
      title: "Vehículos Registrados",
      value: vehiculosQuery.data?.length,
      color: "bg-gradient-to-r from-pink-400 to-red-400",
      loading: vehiculosQuery.isLoading,
    },
    {
      title: "Areas de Trabajo",
      value: areasQuery.data?.length,
      color: "bg-gradient-to-r from-green-400 to-teal-400",
      loading: areasQuery.isLoading,
    },
    {
      title: "Tarjetas de Combustible",
      value: tarjetasQuery.data?.length,
      color: "bg-gradient-to-r from-yellow-400 to-orange-400",
      loading: tarjetasQuery.isLoading,
    },
    {
      title: "Control de Cargas",
      value: cargasQuery.data?.length,
      color: "bg-gradient-to-r from-cyan-400 to-blue-500",
      loading: cargasQuery.isLoading,
    },
    {
      title: "Mantenimientos Realizados",
      value: mantenimientoQuery.data?.length,
      color: "bg-gradient-to-r from-emerald-400 to-teal-500",
      loading: mantenimientoQuery.isLoading,
    },
    {
      title: "Tarjetas de Combustible de Baja",
      value: tarjetasBajaQuery.data?.length,
      color: "bg-gradient-to-r from-orange-400 to-pink-500",
      loading: tarjetasBajaQuery.isLoading,
    },
    {
      title: "Vehiculos de Baja",
      value: vehiculosBajaQuery.data?.length,
      color: "bg-gradient-to-r from-purple-400 to-indigo-600",
      loading: vehiculosBajaQuery.isLoading,
    },
    {
      title: "Choferes de Baja",
      value: choferesBajaQuery.data?.length,
      color: "bg-gradient-to-r from-emerald-400 to-teal-600",
      loading: choferesBajaQuery.isLoading,
    },
  ];

  return (
    <main className="flex-1 p-6 bg-gray-50">
      <header className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">lunes, 7 de abril de 2025</p>
        </div>
        <div className="flex justify-center items-center">
          <UserButton
            name={name}
            role={role}
            openUser={openUser}
            onClick={() => setOpenUser(!openUser)}
          />
        </div>
      </header>

      <div onClick={() => setOpenUser(false)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`${card.color} text-white rounded-lg p-5 flex items-center justify-between shadow-md`}
            >
              <div>
                <p className="text-sm font-medium uppercase">{card.title}</p>
                {card.loading ? (
                  <Image
                    src="/loading.svg"
                    alt="Loading"
                    width={30}
                    height={30}
                    loading="lazy"
                  />
                ) : (
                  <p className="text-2xl font-bold mt-2">{card.value}</p>
                )}
              </div>
              <div>{/* Icono opcional */}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Resumen General de Combustible
            </h2>
            <div className="overflow-x-auto">
              <div
                style={{
                  width: "100%",
                  height: "300px",
                }}
              >
                {datosAgrupados ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={datosAgrupados}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      layout="horizontal"
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="Diesel" fill="#4F46E5" barSize={40} />
                      <Bar dataKey="Especial" fill="#10B981" barSize={40} />
                      <Bar dataKey="B91" fill="#F00" barSize={40} />
                      <Bar dataKey="B83" fill="#F59E0B" barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <LoadingSpinner />
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Tendencia de Mantenimiento de Vehiculos
            </h2>
            <div style={{ width: "100%", height: 250 }}>
              <ResponsiveContainer>
                <LineChart data={mantenimientosData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="mantenimientos"
                    stroke="#2563EB"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function agruparPorMesYCombustible(cargas: CargaBack[]) {
  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const resultado: Record<
    string,
    {
      name: string;
      Diesel: number;
      Especial: number;
      B91: number;
      B83: number;
    }
  > = {};

  cargas.forEach((carga) => {
    const [añoStr, mesStr, diaStr] = carga.fecha.split("-");
    const año = parseInt(añoStr, 10);
    const mes = parseInt(mesStr, 10) - 1;
    const dia = parseInt(diaStr, 10);

    const fecha = new Date(año, mes, dia);
    const mesCorrecto = fecha.getMonth();
    const añoCorrecto = fecha.getFullYear();
    const clave = `${mesCorrecto}-${añoCorrecto}`;
    const nombreMes = `${meses[mesCorrecto]} ${añoCorrecto}`;

    const tipoCombustible = determinarTipoCombustible(carga);
    const dinero = carga.consumo_dinero;

    if (!resultado[clave]) {
      resultado[clave] = {
        name: nombreMes,
        Diesel: 0,
        Especial: 0,
        B91: 0,
        B83: 0,
      };
    }

    switch (tipoCombustible) {
      case "Diesel":
        resultado[clave].Diesel += Math.ceil(dinero / 13.9);
        break;
      case "Especial":
        resultado[clave].Especial += Math.ceil(dinero / 17.4);
        break;
      case "B91":
        resultado[clave].B91 += Math.ceil(dinero / 16.4);
        break;
      case "B83":
        resultado[clave].B83 += Math.ceil(dinero / 14.6);
        break;
      default:
        break;
    }
  });

  return Object.values(resultado).sort((a, b) => {
    const [mesA, añoA] = a.name.split(" ");
    const [mesB, añoB] = b.name.split(" ");
    const indexA = meses.indexOf(mesA);
    const indexB = meses.indexOf(mesB);
    return (
      new Date(Number(añoA), indexA).getTime() -
      new Date(Number(añoB), indexB).getTime()
    );
  });
}

function agruparPorMesYMantenimiento(
  mantenimientos: VehiculoMantenimientoBack[]
) {
  const meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const resultado: Record<
    string,
    {
      name: string;
      mantenimientos: number;
    }
  > = {};

  mantenimientos.forEach((mantenimiento) => {
    const fecha = new Date(mantenimiento.inicio);
    const mes = fecha.getMonth();
    const año = fecha.getFullYear();
    const clave = `${mes}-${año}`;
    const nombreMes = `${meses[mes]} ${año}`;

    if (!resultado[clave]) {
      resultado[clave] = {
        name: nombreMes,
        mantenimientos: 0,
      };
    }

    resultado[clave].mantenimientos += 1;
  });

  return Object.values(resultado).sort((a, b) => {
    const [mesA, añoA] = a.name.split(" ");
    const [mesB, añoB] = b.name.split(" ");
    const indexA = meses.indexOf(mesA);
    const indexB = meses.indexOf(mesB);
    return (
      new Date(Number(añoA), indexA).getTime() -
      new Date(Number(añoB), indexB).getTime()
    );
  });
}

function determinarTipoCombustible(
  carga: CargaBack
): "Diesel" | "Especial" | "B91" | "B83" {
  switch (carga.vehiculo.tarjeta.tipo) {
    case "Diesel":
      return "Diesel";
    case "Especial":
      return "Especial";
    case "B91":
      return "B91";
    case "B83":
      return "B83";
    default:
      return "Diesel";
  }
}
