import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import {
  dateSchema,
  tarjetaSchemaUpdate,
} from "@/app/validations/backend/tarjeta-post.schema";

async function findOne(numero: string) {
  const tarjeta = await prisma.tarjetaCombustible.findUnique({
    where: { numero, isAvailable: true },
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

  return tarjeta;
}

type tParams = Promise<{ numero: string }>;

export async function GET(request: Request, { params }: { params: tParams }) {
  try {
    const { numero } = await params;

    const tarjeta = await findOne(numero);

    if (!tarjeta) {
      return NextResponse.json(
        { error: "Fuel card not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(tarjeta);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching fuel card", message: error },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request, { params }: { params: tParams }) {
  try {
    const param = await params;

    const tarjetaExists = await findOne(param.numero);

    if (!tarjetaExists) {
      return NextResponse.json(
        { error: "Fuel card not found" },
        { status: 404 }
      );
    }

    const body = await request.json();

    const result = tarjetaSchemaUpdate.safeParse(body);

    if (!result.success) {
      return NextResponse.json(result.error, { status: 400 });
    }

    const { numero, pin, estado, fecha_vencimiento, saldo, tipo } = result.data;

    let vencimiento = undefined;

    if (fecha_vencimiento) {
      vencimiento = dateSchema.parse(fecha_vencimiento);
    }

    const tarjeta = await prisma.tarjetaCombustible.update({
      where: { numero },
      data: {
        numero: numero,
        pin: pin || tarjetaExists.pin,
        estado: estado || tarjetaExists.estado,
        fecha_vencimiento: vencimiento,
        saldo: saldo || tarjetaExists.saldo,
        tipo: tipo || tarjetaExists.tipo,
      },
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
    return NextResponse.json(tarjeta);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating fuel card", message: error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: tParams }
) {
  try {
    const { numero } = await params;

    const tarjeta = await findOne(numero);

    if (!tarjeta) {
      return NextResponse.json(
        { error: "Fuel card not found" },
        { status: 404 }
      );
    }

    await prisma.tarjetaCombustible.update({
      where: { numero },
      data: {
        isAvailable: false,
        estado: "Blocked",
      },
    });

    return NextResponse.json({ message: "Fuel card deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting fuel card", message: error },
      { status: 500 }
    );
  }
}
