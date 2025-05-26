import { dateSchema } from "@/app/validations/backend/tarjeta-post.schema";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

async function findOne(uuid: string) {
  return prisma.vehiculosMantenimiento.findUnique({
    where: { uuid },
    include: {
      vehiculo: {
        select: {
          chapa: true,
          marca: true,
          tipo: true,
        },
      },
    },
  });
}

type tParams = Promise<{ params: { uuid: string } }>;

export async function GET(request: Request, { params }: { params: tParams }) {
  try {
    const {
      params: { uuid },
    } = await params;

    const vehiculo = await findOne(uuid);

    if (!vehiculo) {
      return NextResponse.json(
        { error: "Manteniemiento not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(vehiculo);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching vehicle", message: error },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request, { params }: { params: tParams }) {
  try {
    const {
      params: { uuid },
    } = await params;

    const { chapa, descripcion, fin, inicio } = await request.json();

    const fecha_inicio = dateSchema.parse(inicio);
    const fecha_fin = dateSchema.parse(fin);

    const vehicle = await prisma.vehiculo.findUnique({
      where: { chapa },
    });

    if (!vehicle) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }

    await prisma.vehiculo.update({
      where: { chapa },
      data: {
        isAvailable: true,
      },
    });

    const mante = await prisma.vehiculosMantenimiento.update({
      where: { uuid },
      data: {
        vehiculoChapa: chapa,
        inicio: fecha_inicio,
        descripcion,
        fin: fecha_fin,
      },
    });

    return NextResponse.json(
      { message: "Fin mantenimiento vehicle", value: mante },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in PATCH:", error);
    return NextResponse.json(
      { error: "Error fin mantenimiento vehicle", message: error },
      { status: 500 }
    );
  }
}
