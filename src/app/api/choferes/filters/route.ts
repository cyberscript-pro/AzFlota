import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const nombre = searchParams.get("name");
  const edad = searchParams.get("age");
  const sexo = searchParams.get("sexo");
  const ci = searchParams.get("ci");
  const licencia = searchParams.get("licencia");
  const telefono = searchParams.get("telefono");

  if (!nombre && !edad && !sexo && !ci && !licencia && !telefono) {
    return NextResponse.json(
      { error: "Missing search query" },
      { status: 400 }
    );
  }

  let where: any = {};

  if (nombre) {
    where.nombre = { startsWith: nombre };
  }

  if (edad) {
    where.edad = parseInt(edad);
  }

  if (sexo) {
    where.sexo = { startsWith: sexo };
  }
  if (ci) {
    where.ci = { startsWith: ci };
  }

  if (licencia) {
    where.licencia = { startsWith: licencia };
  }

  if (telefono) {
    where.telefono = { startsWith: telefono };
  }

  const results = await prisma.chofer.findMany({
    where,
  });

  return NextResponse.json(results);
}
