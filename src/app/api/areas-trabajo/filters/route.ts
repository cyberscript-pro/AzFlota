import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const nombre = searchParams.get("no");
  const centro = searchParams.get("ce");
  const jefe = searchParams.get("je");

  if (!nombre && !centro && !jefe) {
    return NextResponse.json(
      { error: "Missing search query" },
      { status: 400 }
    );
  }

  let where: any = {};

  if (nombre) {
    where.nombre = { startsWith: nombre };
  }

  if (centro) {
    where.centro_costo = { startsWith: centro };
  }

  if (jefe) {
    where.jefe = { startsWith: jefe };
  }

  const results = await prisma.areaTrabajo.findMany({
    where,
    include: {
      vehiculos: {
        select: {
          chapa: true,
        },
      },
    },
  });

  return NextResponse.json(results);
}
