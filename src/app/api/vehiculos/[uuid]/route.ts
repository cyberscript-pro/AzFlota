import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

// GET vehicle by uuid
export async function GET(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    const vehiculo = await prisma.vehiculo.findUnique({
      where: { uuid: params.uuid },
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

    if (!vehiculo) {
      return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 })
    }

    return NextResponse.json(vehiculo)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching vehicle' }, { status: 500 })
  }
}

// PUT update vehicle
export async function PUT(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    const { chapa, marca, tipo, jefe, isAvailable, areaTrabajoUuid, choferUuid } = await request.json()
    
    const vehiculo = await prisma.vehiculo.update({
      where: { uuid: params.uuid },
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
    
    return NextResponse.json(vehiculo)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating vehicle' }, { status: 500 })
  }
}

// DELETE vehicle
export async function DELETE(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    await prisma.vehiculo.delete({
      where: { uuid: params.uuid },
    })
    
    return NextResponse.json({ message: 'Vehicle deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting vehicle' }, { status: 500 })
  }
} 