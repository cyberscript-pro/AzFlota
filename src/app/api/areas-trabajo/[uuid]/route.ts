import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'

// GET work area by uuid
export async function GET(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    const area = await prisma.areaTrabajo.findUnique({
      where: { uuid: params.uuid },
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

    if (!area) {
      return NextResponse.json({ error: 'Work area not found' }, { status: 404 })
    }

    return NextResponse.json(area)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching work area' }, { status: 500 })
  }
}

// PUT update work area
export async function PUT(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    const { nombre, descripcion, isAvailable } = await request.json()
    
    const area = await prisma.areaTrabajo.update({
      where: { uuid: params.uuid },
      data: {
        nombre,
        descripcion,
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
    
    return NextResponse.json(area)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating work area' }, { status: 500 })
  }
}

// DELETE work area
export async function DELETE(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    await prisma.areaTrabajo.delete({
      where: { uuid: params.uuid },
    })
    
    return NextResponse.json({ message: 'Work area deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting work area' }, { status: 500 })
  }
} 