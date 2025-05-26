import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const numero = searchParams.get("n");
  const estado = searchParams.get("e");
  const tipo = searchParams.get("t");
  const fecha = searchParams.get("d");

  if (!numero && !estado && !tipo && !fecha) {
    return NextResponse.json(
      { error: "Missing search query" },
      { status: 400 }
    );
  }

  let gte: Date, lt: Date;

  let where: any = {};

  if (fecha) {
    const partes = fecha.split("-").map(Number);
    const [año, mes, dia] = partes;
    if (año && mes && dia) {
      gte = new Date(año, mes - 1, dia - 1);
      lt = new Date(año, mes - 1, dia);
    } else if (año && mes) {
      gte = new Date(año, mes - 1, 1);
      lt = new Date(año, mes, 1);
    } else {
      gte = new Date(año, 0, 1);
      lt = new Date(año + 1, 0, 1);
    }
    where.fecha_vencimiento = { gte, lt };
  }

  if (numero) {
    where.numero = { startsWith: numero };
  }

  if (estado) {
    where.estado = estado;
  }

  if (tipo) {
    where.tipo = tipo;
  }

  const results = await prisma.tarjetaCombustible.findMany({
    where,
    include: {
      vehiculo: {
        select: {
          chapa: true,
        },
      },
    },
  });

  return NextResponse.json(results);
}
