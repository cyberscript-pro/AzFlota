import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const numero = searchParams.get("numero");

  if (!numero) {
    return NextResponse.json(
      { error: "Parametro 'numero' es obligatorio" },
      { status: 400 }
    );
  }

  const tarjeta = await prisma.tarjetaCombustible.findUnique({
    where: { numero },
  });

  return NextResponse.json({ exists: tarjeta });
}
