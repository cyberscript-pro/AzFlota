import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

async function findOne(uuid: string) {
  const vehiculo = await prisma.vehiculo.findUnique({
    where: { uuid },
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

  return vehiculo;
}

type tParams = Promise<{ uuid: string }>;

// GET vehicle by uuid
export async function GET(
  request: Request,
  { params }: { params: tParams }
) {
  try {

    const { uuid } = await params;

    const vehiculo = await findOne(uuid); 

    if (!vehiculo) {
      return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 })
    }

    return NextResponse.json(vehiculo)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching vehicle', message: error }, { status: 500 })
  }
}

// PUT update vehicle
export async function PATCH(
  request: Request,
  { params }: { params: tParams }
) {
  try {

    const { uuid } = await params;

    const vehiculoExists = await findOne(uuid); 

    if (!vehiculoExists) {
      return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 })
    }

    const { chapa, marca, tipo, jefe, isAvailable, areaTrabajoUuid, choferCI } = await request.json()
    
    const vehiculo = await prisma.vehiculo.update({
      where: { uuid },
      data: {
        chapa,
        marca,
        tipo,
        jefe,
        isAvailable,
        areaTrabajoUuid,
        choferCI,
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
    return NextResponse.json({ error: 'Error updating vehicle', message: error }, { status: 500 })
  }
}

// DELETE vehicle
export async function DELETE(
  request: Request,
  { params }: { params: tParams }
) {
  try {

    const { uuid } = await params;

    const vehiculo = await findOne(uuid); 

    if (!vehiculo) {
      return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 })
    }

    await prisma.vehiculo.delete({
      where: { uuid },
    })
    
    return NextResponse.json({ message: 'Vehicle deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting vehicle', message: error }, { status: 500 })
  }
} 