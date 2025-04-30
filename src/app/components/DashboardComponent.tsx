import React from "react";
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

const sampleData = [
  { name: "Ene", orders: 3 },
  { name: "Feb", orders: 2 },
  { name: "Mar", orders: 2 },
  { name: "Abr", orders: 1 },
  { name: "May", orders: 0 },
];

type DashboardComponentProps = {
  choferes: number;
  vehiculos: number;
  areas: number;
  tarjetas: number;
  cargas: number;
  mantenimiento: number
};

export default function DashboardComponent({
  choferes,
  vehiculos,
  areas,
  tarjetas,
  cargas,
  mantenimiento,
}: DashboardComponentProps) {
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
        <LogoutButton />
      </header>

      {/* Cards */}
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

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resumen General - Barras */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Resumen General
          </h2>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={sampleData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="orders" fill="#4F46E5" />
                <Bar dataKey="orders" fill="#10B981" />
                <Bar dataKey="orders" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tendencia de Órdenes - Línea */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Tendencia de Órdenes
          </h2>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <LineChart data={sampleData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#2563EB"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
}
