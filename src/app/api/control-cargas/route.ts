import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { controlCargasSchema } from "@/app/validations/backend/control-cargas.schema";
import { dateSchema } from "@/app/validations/backend/tarjeta-post.schema";

export async function GET(request: NextRequest) {
  try {
    const cargas = await prisma.controlCargas.findMany({
      include: {
        vehiculo: {
          select: {
            chapa: true,
            marca: true,
            tipo: true,
            consumo_km: true,
            areaTrabajo: {
              select: {
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
                saldo: true,
                tipo: true,
              },
            },
          },
        },
      },
      orderBy: {
        fecha: "asc",
      },
    });

    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || cargas.length;

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 0) {
      return NextResponse.json(
        { error: "Parámetros page y limit deben ser números positivos" },
        { status: 400 }
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const totalItems = cargas.length;
    const totalPages = Math.ceil(totalItems / limit);

    const paginatedItems = cargas.slice(startIndex, endIndex);

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
    const body = await request.json();

    const result = controlCargasSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 400 }
      );
    }

    const {
      folio,
      comprobante,
      fecha,
      existencia,
      importe,
      consumo_dinero,
      vehiculoChapa,
    } = result.data;

    const dateTime = dateSchema.parse(fecha);

    const cargas = await prisma.controlCargas.create({
      data: {
        folio,
        comprobante,
        fecha: dateTime,
        existencia,
        importe,
        consumo_dinero,
        vehiculoChapa,
      },
      include: {
        vehiculo: {
          select: {
            chapa: true,
            marca: true,
            tipo: true,
            consumo_km: true,
            areaTrabajo: {
              select: {
                nombre: true,
              },
            },
            chofer: {
              select: {
                nombre: true,
                ci: true,
              },
            },
            tarjeta: {
              select: {
                numero: true,
                estado: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(cargas, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating vehicle", message: error },
      { status: 500 }
    );
  }
}
