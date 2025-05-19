import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const folio = searchParams.get("folio");
  const comprobante = searchParams.get("comprobante");

  try {
    if (folio) {
      const carga = await prisma.controlCargas.findUnique({
        where: { folio },
      });
      return NextResponse.json({ folio: carga });
    } else if (comprobante) {
      const carga = await prisma.controlCargas.findUnique({
        where: { comprobante },
      });
      return NextResponse.json({ comprobante: carga });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching vehicle", message: error },
      { status: 500 }
    );
  }
}
