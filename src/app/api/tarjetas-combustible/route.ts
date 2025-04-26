import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import { tarjetaSchemaPost, dateSchema } from '@/app/validations/backend/tarjeta-post.schema'

export enum State {
  ACTIVO = 'Active',
  INACTIVO = 'Inactive',
  BLOQUEADO = 'Blocked',
  VENCIDO = 'Expired'
}

export async function GET() {
  try {
    const tarjetas = await prisma.tarjetaCombustible.findMany({
      where: {
        isAvailable: true
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
    })
    return NextResponse.json(tarjetas)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching fuel cards'}, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {

    const body = await request.json();

    const result = tarjetaSchemaPost.safeParse(body);

    if(result.error) {
      return NextResponse.json(result.error, { status: 400 });
    }

    const { numero, pin, estado, fecha_vencimiento, vehiculo } = result.data;
    
    const vencimiento = dateSchema.parse(fecha_vencimiento);

    const tarjeta = await prisma.tarjetaCombustible.create({
      data: {
        numero,
        pin,
        estado,
        fecha_vencimiento: vencimiento,
        vehiculoUuid: vehiculo
      }
    })
    
    return NextResponse.json(tarjeta, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear tarjeta de combustible', message: error }, { status: 500 })
  }
} 