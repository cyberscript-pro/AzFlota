import Image from "next/image";
import {
  Home,
  Users,
  Folder,
  Truck,
  Calendar,
  Box,
  Settings,
  Fence, 
  IdCard, 
  CreditCard,
  Grid2x2
} from "lucide-react";
import { useRouter } from "next/navigation";
import SidebarButton from "./SidebarButton";
import { useCallback } from "react";

function SidebarDashboard() {
  const router = useRouter();

  const handleNavigate = useCallback((path: string) => {
    router.push(path);
  }, [router]);

  return (
    <header className="w-[350px] sidebar h-screen">
      <aside className="w-[350px] h-screen p-6 text-white">
        <div className="mb-8 flex items-center space-x-2">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <span className="text-2xl font-bold">AzFlota</span>
        </div>
        <nav>
          <ul className="space-y-4">
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
              onClick={() => handleNavigate("/flota/control-cargas")}
              icon={<Box size={20} />}
              tooltipText="Control de Cargas"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/flota/manteniento")}
              icon={<Settings size={20} />}
              tooltipText="Vehiculos en Mantenimiento"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/users")}
              icon={<Users size={20} />}
              tooltipText="Choferes Despedidos"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("")}
              icon={<Fence size={20} />}
              tooltipText="Vehiculos de Baja"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton
              onClick={() => handleNavigate("/users/roles")}
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
