"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SidebarDashboard from "../components/SidebarDashboard";
import DashboardComponent from "../components/DashboardComponent";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/loading";
import { useQuery } from "@tanstack/react-query";
import { CargaBack } from "../types/cargas-types";
import { AreaTrabajoBack } from "../types/area-types";
import { Chofer } from "../types/choferes-types";
import { VehiculoMantenimientoBack } from "../types/mantenimiento-types";
import { Tarjeta } from "../types/tarjeta-types";
import { VehiculoBack } from "../types/vehiculo-types";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="flex">
        <SidebarDashboard />
        <DashboardComponent
          role={session?.user.role}
          name={session?.user.name}
        />
      </div>
    </div>
  );
}