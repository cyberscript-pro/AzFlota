import Image from "next/image";
import {
  Home,
  Users,
  Truck,
  Calendar,
  Box,
  Settings,
  Fence,
  IdCard,
  CreditCard,
  Grid2x2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import SidebarButton from "./SidebarButton";
import { useCallback } from "react";

function SidebarDashboard() {
  const router = useRouter();

  const handleNavigate = useCallback(
    (path: string) => {
      router.push(path);
    },
    [router]
  );

  return (
    <header className="w-[350px] sidebar h-screen sticky top-0 left-0 z-50">
      <aside className="w-[350px] h-screen p-6 text-white">
        <div className="mb-8 flex items-center space-x-2">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <span className="text-2xl font-bold">AzFlota</span>
        </div>
        <nav>
          <ul className="space-y-4">
            <SidebarButton
              onClick={() => handleNavigate("/dashboard")}
              icon={<Home size={20} />}
              tooltipText="Pagina Principal"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/flota/area-trabajo")}
              icon={<Grid2x2 size={20} />}
              tooltipText="Areas de Trabajo"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/flota/choferes")}
              icon={<Calendar size={20} />}
              tooltipText="Choferes"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/flota/vehiculos")}
              icon={<Truck size={20} />}
              tooltipText="Vehículos"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/flota/tarjeta-combustible")}
              icon={<IdCard size={20} />}
              tooltipText="Tarjetas de Combustible"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/flota/cargas")}
              icon={<Box size={20} />}
              tooltipText="Control de Cargas"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/flota/mantenimiento")}
              icon={<Settings size={20} />}
              tooltipText="Vehiculos en Mantenimiento"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/flota/choferes-baja")}
              icon={<Users size={20} />}
              tooltipText="Choferes de Baja"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/flota/vehiculos-baja")}
              icon={<Fence size={20} />}
              tooltipText="Vehiculos de Baja"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/flota/tarjetas-baja")}
              icon={<CreditCard size={20} />}
              tooltipText="Tarjetas de Combustible de Baja"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
          </ul>
        </nav>
      </aside>
    </header>
  );
}

export default SidebarDashboard;
