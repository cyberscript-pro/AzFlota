import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const chapa = searchParams.get("ch");
  const marca = searchParams.get("m");
  const tipo = searchParams.get("t");
  const tarjeta = searchParams.get("tar");
  const area = searchParams.get("ar");
  const chofer = searchParams.get("cho");

  if (!chapa && !marca && !tipo && !tarjeta && !area && !chofer) {
    return NextResponse.json(
      { error: "Missing search query" },
      { status: 400 }
    );
  }

  let where: any = {};

  if (chapa) {
    where.chapa = { startsWith: chapa };
  }

  if (marca) {
    where.marca = { startsWith: marca };
  }

  if (tipo) {
    where.tipo = { startsWith: tipo };
  }

  if (tarjeta) {
    where.tarjetaNumero = { startsWith: tarjeta };
  }

  if (area) {
    where.areaTrabajoUuid = { startsWith: area };
  }

  if (chofer) {
    where.choferCI = { startsWith: chofer };
  }

  const results = await prisma.vehiculo.findMany({
    where,
    include: {
      areaTrabajo: {
        select: {
          uuid: true,
          nombre: true,
          centro_costo: true,
          jefe: true,
        },
      },
      chofer: {
        select: {
          nombre: true,
          ci: true,
          licencia: true,
        },
      },
      tarjeta: {
        select: {
          numero: true,
          estado: true,
          fecha_vencimiento: true,
        },
      },
    },
  });

  return NextResponse.json(results);
}
