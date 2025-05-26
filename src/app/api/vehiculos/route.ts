import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const vehiculos = await prisma.vehiculo.findMany({
      where: {
        isAvailable: true,
      },
      include: {
        mantenimientos: {
          select: {
            inicio: true,
            fin: true,
          },
        },
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
      { error: "Error fetching vehicles", message: error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { chapa, marca, tipo, consumo_km, area, chofer, tarjeta } =
      await request.json();

    const vehiculo = await prisma.vehiculo.create({
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

    return NextResponse.json(vehiculo, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating vehicle", message: error },
      { status: 500 }
    );
  }
}
