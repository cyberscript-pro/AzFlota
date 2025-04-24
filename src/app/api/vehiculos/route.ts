import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

// GET all vehicles
export async function GET() {
  try {
    const vehiculos = await prisma.vehiculo.findMany({
      include: {
        areaTrabajo: {
          select: {
            uuid: true,
            nombre: true,
            descripcion: true,
          },
        },
        chofer: {
          select: {
            uuid: true,
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
    return NextResponse.json(vehiculos)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching vehicles', message: error }, { status: 500 })
  }
}

// POST create new vehicle
export async function POST(request: Request) {
  try {
    const { chapa, marca, tipo, jefe, isAvailable, areaTrabajoUuid, choferUuid } = await request.json()
    
    const vehiculo = await prisma.vehiculo.create({
      data: {
        chapa,
        marca,
        tipo,
        jefe,
        isAvailable,
        areaTrabajoUuid,
        choferUuid,
      },
      include: {
        areaTrabajo: {
          select: {
            uuid: true,
            nombre: true,
            descripcion: true,
          },
        },
        chofer: {
          select: {
            uuid: true,
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
    return NextResponse.json({ error: 'Error creating vehicle' }, { status: 500 })
  }
} 