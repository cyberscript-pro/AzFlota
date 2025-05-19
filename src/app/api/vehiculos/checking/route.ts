import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const chapa = searchParams.get("chapa");

  try {
    if (chapa) {
      const vehiculo = await prisma.vehiculo.findUnique({
        where: { chapa },
      });
      return NextResponse.json({ chapa: vehiculo });
    } 
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching vehicle", message: error },
      { status: 500 }
    );
  }
}
