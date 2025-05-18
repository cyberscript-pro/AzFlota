import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

// GET all work areas
export async function GET(
  request: NextRequest,
) {
  try {
    const areas = await prisma.areaTrabajo.findMany({
      include: {
        vehiculos: {
          select: {
            chapa: true,
          },
        },
      },
    });

    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || areas.length;

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 0) {
      return NextResponse.json(
        { error: "Parámetros page y limit deben ser números positivos" },
        { status: 400 }
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const totalItems = areas.length;
    const totalPages = Math.ceil(totalItems / limit);

    const paginatedItems = areas.slice(startIndex, endIndex);

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
    return NextResponse.json({ error: 'Error fetching work areas', message: error }, { status: 500 })
  }
}

// POST create new work area
export async function POST(request: Request) {
  try {
    const { nombre, centro_costo, jefe } = await request.json()

    const area = await prisma.areaTrabajo.create({
      data: {
        nombre,
        centro_costo,
        jefe,
      },
    })

    return NextResponse.json(area, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating work area', message: error }, { status: 500 })
  }
} 