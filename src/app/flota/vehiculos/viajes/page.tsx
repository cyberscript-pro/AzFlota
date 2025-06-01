"use client";
import dynamic from 'next/dynamic'

const ViajesImport = dynamic(() => import("./viajes"), {
  ssr: false,
});

function ViajesVehiculo() {

  return (
    <ViajesImport />
  )
}

export default ViajesVehiculo