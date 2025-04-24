import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

// GET all work areas
export async function GET() {
  try {
    const areas = await prisma.areaTrabajo.findMany({
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
    return NextResponse.json(areas)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching work areas' }, { status: 500 })
  }
}

// POST create new work area
export async function POST(request: Request) {
  try {
    const { nombre, descripcion, isAvailable } = await request.json()
    
    const area = await prisma.areaTrabajo.create({
      data: {
        nombre,
        descripcion,
        isAvailable,
      },
    })
    
    return NextResponse.json(area, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating work area' }, { status: 500 })
  }
} 