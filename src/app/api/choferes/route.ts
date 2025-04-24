import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'

// GET all drivers
export async function GET() {
  try {
    const choferes = await prisma.chofer.findMany({
      where: {
        isAvailable: true
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
    return NextResponse.json(choferes)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching drivers', message: error }, { status: 500 })
  }
}

// POST create new driver
export async function POST(request: Request) {
  try {
    const { nombre, ci, licencia } = await request.json()
    
    const chofer = await prisma.chofer.create({
      data: {
        nombre,
        ci,
        licencia
      },
    })
    
    return NextResponse.json(chofer, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating driver' }, { status: 500 })
  }
} 