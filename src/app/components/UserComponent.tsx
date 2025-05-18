"use client";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { LogOut, User } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast, Toaster } from "sonner";
import { useState } from "react";
import LogoutButton from "./LogoutComponent";

export default function UserButton({
  name,
  role,
  openUser,
  onClick,
}: {
  name?: string;
  role?: string;
  openUser: boolean;
  onClick: () => void;
}) {
  //const [openUser, setOpenUser] = useState(false);

  return (
    <div>
      <Toaster richColors />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              className="p-2 rounded"
              aria-label="Usuario"
              onClick={onClick}
            >
              <User className="w-5 h-5 text-black" />
            </button>
          </TooltipTrigger>
          <TooltipContent side="bottom" align="center" className="mr-2">
            <p className="text-sm text-white">Usuario</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {openUser && (
        <div className="fixed right-3 w-[12rem] bg-gray-100 min-h-20 flex flex-col rounded-md p-2 shadow-lg">
          <div className="px-3 py-1 flex">
            Usuario: <span className="text-black px-2">{name}</span>
          </div>
          <div className="px-3 py-1 flex">
            Rol: <span className="text-black px-2">{role}</span>
          </div>
          <LogoutButton />
        </div>
      )}
    </div>
  );
}
