import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { dateSchema } from "@/app/validations/backend/tarjeta-post.schema";

async function findOne(chapa: string) {
  return prisma.vehiculo.findUnique({
    where: { chapa },
    include: {
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
          saldo: true,
        },
      },
    },
  });
}

type tParams = Promise<{ chapa: string }>;

export async function GET(request: Request, { params }: { params: tParams }) {
  try {
    const { chapa } = await params;

    const vehiculo = await findOne(chapa);

    if (!vehiculo) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
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
    const param = await params;

    const vehiculoExists = await findOne(param.chapa);

    if (!vehiculoExists) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }

    const { chapa, marca, tipo, consumo_km, area, chofer, tarjeta } =
      await request.json();

    const vehiculo = await prisma.vehiculo.update({
      where: { chapa: param.chapa },
      data: {
        chapa,
        marca,
        tipo,
        consumo_km: parseInt(consumo_km),
        areaTrabajoUuid: area,
        choferCI: chofer,
        tarjetaNumero: tarjeta,
      },
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

    return NextResponse.json(vehiculo);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating vehicle", message: error },
      { status: 500 }
    );
  }
}

// DELETE vehicle
export async function DELETE(
  request: NextRequest,
  { params }: { params: tParams }
) {
  try {
    const { chapa } = await params;
    const { inicio, descripcion } = await request.json();

    const vehiculo = await findOne(chapa);

    if (!vehiculo) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }

    const response = await fetch(
      "http://localhost:3000/api/vehiculos-mantenimiento",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chapa,
          inicio,
          descripcion,
        }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Error al enviar los datos" },
        { status: 400 }
      );
    }

    await prisma.vehiculo.update({
      where: { chapa },
      data: {
        isAvailable: false,
      },
    });

    return NextResponse.json({
      message: "Vehicle mantenimiento successfully",
      elements: { inicio, descripcion, response },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting vehicle", message: error },
      { status: 500 }
    );
  }
}
