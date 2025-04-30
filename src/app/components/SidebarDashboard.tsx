import Image from "next/image";
import {
  Home,
  Users,
  Folder,
  Truck,
  Calendar,
  Box,
  Settings,
} from "lucide-react";
import { useRouter } from "next/navigation";
import SidebarButton from "./SidebarButton";

function SidebarDashboard() {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  }

  return (
    <header className="w-80 sidebar h-screen">
      <aside className="w-80 h-screen p-6 text-white">
        <div className="mb-8 flex items-center space-x-2">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <span className="text-2xl font-bold">AzFlota</span>
        </div>
        <nav>
          <ul className="space-y-4">
            <SidebarButton 
              onClick={() => handleNavigate("/dashboard")}
              icon={<Home size={20} />}
              tooltipText="Dashboard"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            /> 
            <SidebarButton 
              onClick={() => handleNavigate("/flota/areas-trabajo")}
              icon={<Folder size={20} />}
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
              icon={<Box size={20} />}
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
              icon={<Folder size={20} />}
              tooltipText="Usuarios"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton 
              onClick={() => handleNavigate("")}
              icon={<Users size={20} />}
              tooltipText="Clientes"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            />
            <SidebarButton 
              onClick={() => handleNavigate("/users/roles")}
              icon={<Users size={20} />}
              tooltipText="Roles"
              className="flex items-center space-x-3 hover:opacity-80 cursor-pointer"
            /> 
          </ul>
        </nav>
      </aside>
    </header>
  );
}

export default SidebarDashboard;
