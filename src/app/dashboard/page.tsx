"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import SidebarDashboard from "../components/SidebarDashboard";
import DashboardComponent from "../components/DashboardComponent";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/loading";

export default function Dashboard() {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);

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
          choferes={4}
          vehiculos={3}
          areas={2}
          tarjetas={4}
          cargas={7}
          mantenimiento={1}
        />
      </div>
    </div>
  );
}
