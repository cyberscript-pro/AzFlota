import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LogoutButton from "./LogoutComponent";
import UserButton from "./UserComponent";

const sampleData = [
  { name: "Sep", Diesel: 2, G_Especial: 8, B91: 2, B83: 1 },
  { name: "Oct", Diesel: 7, G_Especial: 9, B91: 3, B83: 3 },
  { name: "Nov", Diesel: 17, G_Especial: 7, B91: 5, B83: 2 },
  { name: "Dic", Diesel: 20, G_Especial: 1, B91: 8, B83: 5 },
  { name: "Ene", Diesel: 8, G_Especial: 4, B91: 5, B83: 6 },
  { name: "Feb", Diesel: 9, G_Especial: 3, B91: 2, B83: 4 },
  { name: "Mar", Diesel: 5, G_Especial: 2, B91: 3, B83: 4 },
  { name: "Abr", Diesel: 15, G_Especial: 4, B91: 5, B83: 6 },
  { name: "May", Diesel: 12, G_Especial: 3, B91: 2, B83: 4 },
];

const mantenimientoData = [
  { name: "Ene", Mantenimiento: 8 },
  { name: "Feb", Mantenimiento: 5 },
  { name: "Mar", Mantenimiento: 9 },
  { name: "Abr", Mantenimiento: 3 },
  { name: "May", Mantenimiento: 1 },
];

type DashboardComponentProps = {
  choferes: number;
  vehiculos: number;
  areas: number;
  tarjetas: number;
  cargas: number;
  mantenimiento: number;
  role?: string;
  name?: string;
};

export default function DashboardComponent({
  choferes,
  vehiculos,
  areas,
  tarjetas,
  cargas,
  mantenimiento,
  role,
  name,
}: DashboardComponentProps) {
  const [openUser, setOpenUser] = useState(false);

  const cards = [
    {
      title: "Choferes Registrados",
      value: choferes,
      color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    },
    {
      title: "Vehículos Registrados",
      value: vehiculos,
      color: "bg-gradient-to-r from-pink-400 to-red-400",
    },
    {
      title: "Areas de Trabajo",
      value: areas,
      color: "bg-gradient-to-r from-green-400 to-teal-400",
    },
    {
      title: "Tarjetas de Combustible",
      value: tarjetas,
      color: "bg-gradient-to-r from-yellow-400 to-orange-400",
    },
    {
      title: "Control de Cargas",
      value: cargas,
      color: "bg-gradient-to-r from-cyan-400 to-blue-500",
    },
    {
      title: "Vehiculos en Mantenimiento",
      value: mantenimiento,
      color: "bg-gradient-to-r from-emerald-400 to-teal-500",
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
                <p className="text-2xl font-bold mt-2">{card.value}</p>
              </div>
              <div>{/* Icono opcional */}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {/* Resumen General - Barras */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Resumen General de Combustible
            </h2>
            <div style={{ height: 250, minWidth: "100%" }}>
              <ResponsiveContainer>
                <BarChart data={sampleData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Diesel" fill="#4F46E5" />
                  <Bar dataKey="G_Especial" fill="#10B981" />
                  <Bar dataKey="B91" fill="#F00" />
                  <Bar dataKey="B83" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Tendencia de Órdenes - Línea */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Tendencia de Mantenimiento de Vehiculos
            </h2>
            <div style={{ width: "100%", height: 250 }}>
              <ResponsiveContainer>
                <LineChart data={mantenimientoData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="Mantenimiento"
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
