import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const vehiculos = await prisma.vehiculosBaja.findMany({
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

    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || vehiculos.length;

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 0) {
      return NextResponse.json(
        { error: "Parámetros page y limit deben ser números positivos" },
        { status: 400 }
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const totalItems = vehiculos.length;
    const totalPages = Math.ceil(totalItems / limit);

    const paginatedItems = vehiculos.slice(startIndex, endIndex);

    return NextResponse.json({
      data: paginatedItems,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        itemsPerPage: limit,
        hasNextPage: endIndex < totalItems,
        hasPrevPage: startIndex > 0,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching mantenimientos", message: error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    

    const body = await request.json();
    const { vehiculoChapa } = body;

    if (!vehiculoChapa) {
      return NextResponse.json(
        { error: "La chapa del vehículo es requerida" },
        { status: 400 }
      );
    }

    const vehiculo = await prisma.vehiculo.findUnique({
      where: { chapa: vehiculoChapa },
    });

    if (!vehiculo) {
      return NextResponse.json(
        { error: "Vehículo no encontrado" },
        { status: 404 }
      );
    }

    // const vehiculoBaja = await prisma.vehiculoBaja.create({
    //   data: {
    //     vehiculoChapa,
    //     fecha_baja: new Date(),
    //   },
    //   include: {
    //     vehiculo: {
    //       select: {
    //         chapa: true,
    //         marca: true,
    //         tipo: true,
    //       },
    //     },
    //   },
    // });

    // await prisma.vehiculo.update({
    //   where: { chapa: vehiculoChapa },
    //   data: { disponible: false },
    // });

    //return NextResponse.json(vehiculoBaja);
  } catch (error) {
    console.error("Error al dar de baja el vehículo:", error);
    return NextResponse.json(
      { error: "Error al dar de baja el vehículo" },
      { status: 500 }
    );
  }
}
