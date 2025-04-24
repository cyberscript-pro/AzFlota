import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

enum State {
  ACTIVO = 'Active',
  INACTIVO = 'Inactive',
  BLOQUEADO = 'Blocked',
  VENCIDO = 'Expired'
}

type TarjetaCombustible = {
  numero: string
  pin: number
  estado: State
  fecha_vencimiento: Date
}

// GET all fuel cards
export async function GET() {
  try {
    const tarjetas = await prisma.tarjetaCombustible.findMany({
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

// POST create new fuel card
export async function POST(request: Request) {
  try {
    const { numero, pin, estado, fecha_vencimiento }: TarjetaCombustible = await request.json()
    
    const tarjeta = await prisma.tarjetaCombustible.create({
      data: {
        numero,
        pin,
        estado,
        fecha_vencimiento,
      }
    })
    
    return NextResponse.json(tarjeta, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating fuel card', message: error }, { status: 500 })
  }
} 