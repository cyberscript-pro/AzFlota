import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import { tarjetaSchemaPost, dateSchema } from '@/app/validations/backend/tarjeta-post.schema'

export async function GET(
  request: NextRequest,
) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return NextResponse.json(
        { error: "Parámetros page y limit deben ser números positivos" },
        { status: 400 }
      );
    }

    const tarjetas = await prisma.tarjetaCombustible.findMany({
      where: {
        isAvailable: true
      },
      orderBy: {
        numero: 'desc'
      },
      include: {
        vehiculo: {
          select: {
            uuid: true,
            chapa: true,
            marca: true,
            tipo: true,
          },
        },
      },
    });

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const totalItems = tarjetas.length;
    const totalPages = Math.ceil(totalItems / limit);

    const paginatedItems = tarjetas.slice(startIndex, endIndex);

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
    return NextResponse.json({ error: 'Error fetching fuel cards', message: error }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {

    const body = await request.json();

    const result = tarjetaSchemaPost.safeParse(body);

    if(result.error) {
      return NextResponse.json(result.error, { status: 400 });
    }

    const { numero, pin, estado, fecha_vencimiento } = result.data;
    
    const vencimiento = dateSchema.parse(fecha_vencimiento);

    const tarjeta = await prisma.tarjetaCombustible.create({
      data: {
        numero,
        pin: parseInt(pin),
        estado,
        fecha_vencimiento: vencimiento
      }
    })
    
    return NextResponse.json(tarjeta, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear tarjeta de combustible', message: error }, { status: 500 })
  }
} 