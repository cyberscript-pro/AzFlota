'use client'
import Image from "next/image"
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function LogoutButton() {
  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="p-2 rounded hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
          aria-label="Cerrar sesión"
        >
          <LogOut className="w-5 h-5 text-red-600" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" align="center" className="mr-2">
        <p className="text-sm text-white">Cerrar Sesión</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )
}