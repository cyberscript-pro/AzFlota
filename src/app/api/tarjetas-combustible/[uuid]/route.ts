import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

// GET fuel card by uuid
export async function GET(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    const tarjeta = await prisma.tarjetaCombustible.findUnique({
      where: { uuid: params.uuid },
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

    if (!tarjeta) {
      return NextResponse.json({ error: 'Fuel card not found' }, { status: 404 })
    }

    return NextResponse.json(tarjeta)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching fuel card' }, { status: 500 })
  }
}

// PATCH update fuel card
export async function PATCH(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    const { numero, pin, estado, fecha_vencimiento, isAvailable, vehiculoUuid } = await request.json()
    
    const tarjeta = await prisma.tarjetaCombustible.update({
      where: { uuid: params.uuid },
      data: {
        numero,
        pin,
        estado,
        fecha_vencimiento,
        isAvailable,
        vehiculoUuid,
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
    
    return NextResponse.json(tarjeta)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating fuel card' }, { status: 500 })
  }
}

// DELETE fuel card
export async function DELETE(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    await prisma.tarjetaCombustible.delete({
      where: { uuid: params.uuid },
    })
    
    return NextResponse.json({ message: 'Fuel card deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting fuel card' }, { status: 500 })
  }
} 