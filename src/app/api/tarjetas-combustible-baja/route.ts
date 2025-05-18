import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const tarjetasBaja = await prisma.tarjetaCombustibleBaja.findMany({
      include: {
        tarjeta: {
          select: { estado: true },
        },
      },
    });

    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || tarjetasBaja.length;

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 0) {
      return NextResponse.json(
        { error: "Parámetros page y limit deben ser números positivos" },
        { status: 400 }
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const totalItems = tarjetasBaja.length;
    const totalPages = Math.ceil(totalItems / limit);

    const paginatedItems = tarjetasBaja.slice(startIndex, endIndex);

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
    const { tarjeta } = await request.json();

    const tarjetaBaja = await prisma.tarjetaCombustibleBaja.create({
      data: {
        tarjetaNumero: tarjeta,
      },
      include: {
        tarjeta: {
          select: {
            estado: true,
          },
        },
      },
    });

    return NextResponse.json(tarjetaBaja, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating vehicle", message: error },
      { status: 500 }
    );
  }
}
