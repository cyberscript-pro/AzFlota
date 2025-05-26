import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { dateSchema } from "@/app/validations/backend/tarjeta-post.schema";

export async function GET(request: NextRequest) {
  try {
    const vehiculos = await prisma.vehiculosMantenimiento.findMany({
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
    const {
      chapa,
      descripcion,
      inicio,
      fin,
    }: { chapa: string; descripcion: string; inicio: string; fin: string } =
      await request.json();

    let fecha_fin = null;

    const fecha_inicio = dateSchema.parse(inicio);
    if (fin) {
      fecha_fin = dateSchema.parse(fin);
    }

    const mantenimiento = await prisma.vehiculosMantenimiento.create({
      data: {
        vehiculoChapa: chapa,
        descripcion,
        inicio: fecha_inicio,
        fin: fecha_fin,
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

    return NextResponse.json(mantenimiento, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating vehicle", message: error },
      { status: 500 }
    );
  }
}
