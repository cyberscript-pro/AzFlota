import { dateSchema } from "@/app/validations/backend/tarjeta-post.schema";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

async function findOne(uuid: string) {
  return await prisma.vehiculosMantenimiento.findUnique({
    where: { uuid },
  });
}

type tParams = Promise<{ uuid: string }>;

export async function GET(request: Request, { params }: { params: tParams }) {
  try {
    const param = await params;

    const vehiculo = await findOne(param.uuid);

    if (!vehiculo) {
      return NextResponse.json(
        { error: "Mantenimiento not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(vehiculo);
  } catch (error) {
    console.error("Error in GET:", error);
    return NextResponse.json(
      { error: "Error fetching maintenance record", message: error },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request, { params }: { params: tParams }) {
  try {
    const param = await params;

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
      where: { uuid: param.uuid },
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

export async function DELETE(
  request: Request,
  { params }: { params: tParams }
) {
  try {
    const param = await params;
    const { chapa, descripcion, fin, inicio } = await request.json();

    const fecha_inicio = dateSchema.parse(inicio);
    const fecha_fin = dateSchema.parse(fin);

    const vehicle = await prisma.vehiculo.findUnique({
      where: { chapa },
    });

    if (!vehicle) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }

    await prisma.vehiculosMantenimiento.update({
      where: { uuid: param.uuid },
      data: {
        vehiculoChapa: chapa,
        inicio: fecha_inicio,
        descripcion,
        fin: fecha_fin,
      },
    });

    await prisma.vehiculo.update({
      where: {
        chapa,
      },
      data: {
        isAvailable: false,
      },
    });
    return NextResponse.json(`Dado de baja el vehiculo de chapa: ${chapa}`, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json("Error dando de baja el vehiculo", {
      status: 500,
    });
  }
}
