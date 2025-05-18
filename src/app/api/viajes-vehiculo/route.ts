import {
  dateSchema,
  viajesVehiculoSchema,
} from "@/app/validations/backend/viajes-vehiculo.schema";
import prisma from "@/lib/prisma";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const chapa = searchParams.get("chapa");

    if (!chapa) {
      return NextResponse.json(
        { error: "Chapa es requerida" },
        { status: 400 }
      );
    }

    const viajes = await prisma.viajesVehiculos.findMany({
      where: {
        vehiculoChapa: chapa,
      },
    });

    return NextResponse.json(viajes, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error leer viajes", message: error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = viajesVehiculoSchema.safeParse(body);

    if (response.error) {
      return NextResponse.json(response.error, { status: 400 });
    }

    const {
      fechaSalida,
      fechaLlegada,
      lugarDestino,
      combustibleConsumido,
      vehiculoChapa,
    } = response.data;

    const salida = dateSchema.parse(fechaSalida);
    const llegada = dateSchema.parse(fechaLlegada);

    // const viaje = {
    //   salida,
    //   llegada,
    //   lugarDestino,
    //   combustibleConsumido,
    //   vehiculoChapa,
    // };

    const viaje = await prisma.viajesVehiculos.create({
      data: {
        fechaSalida: salida,
        fechaLlegada: llegada,
        lugarDestino,
        combustibleConsumido,
        vehiculoChapa,
      },
    });

    return NextResponse.json(viaje, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear viaje", message: error },
      { status: 500 }
    );
  }
}
