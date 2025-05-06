import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

async function findOne(uuid:string) {
  const area = await prisma.areaTrabajo.findUnique({
    where: { uuid },
    include: {
      vehiculos: {
        select: {
          uuid: true,
          chapa: true,
          marca: true,
          tipo: true,
        },
      },
    },
  });

  return area;
}

type tParams = Promise<{ uuid: string }>

export async function GET(
  request: Request,
  { params }: { params: tParams }
) {
  try {
    const { uuid } = await params;

    const area = await findOne(uuid);

    if (!area) {
      return NextResponse.json({ error: 'Work area not found' }, { status: 404 })
    }

    return NextResponse.json(area)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching work area', message: error }, { status: 500 })
  }
}

// PUT update work area
export async function PUT(
  request: Request,
  { params }: { params: tParams }
) {
  try {
    const { uuid } = await params;

    const areaExists = await findOne(uuid);

    if (!areaExists) {
      return NextResponse.json({ error: 'Work area not found' }, { status: 404 })
    }

    const { nombre, centro_costo, jefe } = await request.json()

    const area = await prisma.areaTrabajo.update({
      where: { uuid },
      data: {
        nombre,
        centro_costo,
        jefe,
      },
      include: {
        vehiculos: {
          select: {
            uuid: true,
            chapa: true,
            marca: true,
            tipo: true,
          },
        },
      },
    })

    return NextResponse.json(area)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating work area', message: error }, { status: 500 })
  }
}

// DELETE work area
export async function DELETE(
  request: Request,
  { params }: { params: tParams }
) {
  try {
    const { uuid } = await params;

    const areaExists = await findOne(uuid);

    if (!areaExists) {
      return NextResponse.json({ error: 'Work area not found' }, { status: 404 })
    }

    await prisma.areaTrabajo.delete({
      where: { uuid },
    })

    return NextResponse.json({ message: 'Work area deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting work area', message: error }, { status: 500 })
  }
} 