import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

// GET all vehicles
export async function GET(
  request: NextRequest,
) {
  try {
    const vehiculos = await prisma.vehiculo.findMany({
      include: {
        areaTrabajo: {
          select: {
            uuid: true,
            nombre: true,
            centro_costo: true,
            jefe: true
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
            uuid: true,
            numero: true,
            estado: true,
            fecha_vencimiento: true,
          },
        },
      },
    })
    
    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || vehiculos.length;

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
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
    return NextResponse.json({ error: 'Error fetching vehicles', message: error }, { status: 500 })
  }
}

// POST create new vehicle
export async function POST(request: Request) {
  try {
    const { chapa, marca, tipo, area, chofer, tarjeta } = await request.json()
    
    const vehiculo = await prisma.vehiculo.create({
      data: {
        chapa,
        marca,
        tipo,
        areaTrabajoUuid: area,
        choferCI: chofer,
        tarjetaUuid: tarjeta
      },
      include: {
        areaTrabajo: {
          select: {
            uuid: true,
            nombre: true,
            centro_costo: true,
            jefe: true
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
            uuid: true,
            numero: true,
            estado: true,
            fecha_vencimiento: true,
          },
        },
      },
    })

    return NextResponse.json(vehiculo, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating vehicle', message: error }, { status: 500 })
  }
} 