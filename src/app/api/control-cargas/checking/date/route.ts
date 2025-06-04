import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const chapa = searchParams.get("chapa");
  const fecha = searchParams.get("fecha");

  if (!chapa || !fecha) {
    return NextResponse.json(
      { error: "Parámetros faltantes" },
      { status: 400 }
    );
  }

  const ultimaCarga = await prisma.controlCargas.findFirst({
    where: { vehiculoChapa: chapa },
    orderBy: { fecha: "desc" },
  });

  const ultimaFecha = ultimaCarga?.fecha;

  if (ultimaFecha && new Date(fecha) < new Date(ultimaFecha)) {
    return NextResponse.json({ exists: true });
  }

  return NextResponse.json({ exists: null });
}
