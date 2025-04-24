import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

async function findOne(uuid:string) {
  const chofer = await prisma.chofer.findUnique({
    where: { uuid, isAvailable: true },
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

  return chofer;
}

// GET driver by uuid
export async function GET(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    const chofer = await findOne(params.uuid);

    if (!chofer) {
      return NextResponse.json({ error: 'Driver not found' }, { status: 404 })
    }

    return NextResponse.json(chofer);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching driver' }, { status: 500 })
  }
}

// PUT update driver
export async function PATCH(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {

    const chofer = await findOne(params.uuid);

    if (!chofer) {
      return NextResponse.json({ error: 'Driver not found' }, { status: 404 })
    }

    const { nombre, ci, licencia, isAvailable } = await request.json()
    
    const updated = await prisma.chofer.update({
      where: { uuid: params.uuid },
      data: {
        nombre,
        ci,
        licencia,
        isAvailable,
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
    
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating driver' }, { status: 500 })
  }
}

// DELETE driver
export async function DELETE(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    const chofer = await findOne(params.uuid);

    if (!chofer) {
      return NextResponse.json({ error: 'Driver not found' }, { status: 404 })
    }

    await prisma.chofer.update({
      where: { uuid: params.uuid },
      data: {
        isAvailable: false
      }
    })
    
    return NextResponse.json({ message: 'Driver deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting driver' }, { status: 500 })
  }
} 