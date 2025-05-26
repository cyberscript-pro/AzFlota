import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folio = searchParams.get("f");
  const comprobante = searchParams.get("co");
  const fecha = searchParams.get("d");
  const chapa = searchParams.get("ch");

  if (!folio && !comprobante && !chapa && !fecha) {
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
    where.fecha = { gte, lt };
  }

  if (folio) {
    where.folio = { startsWith: folio };
  }

  if (comprobante) {
    where.comprobante = { startsWith: comprobante };
  }

  if (chapa) {
    where.vehiculoChapa = { startsWith: chapa };
  }

  const results = await prisma.controlCargas.findMany({
    where,
  });

  return NextResponse.json(results);
}
