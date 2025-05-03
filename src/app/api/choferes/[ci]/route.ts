import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'
import { choferSchemaUpdate } from '@/app/validations/backend/chofer-update.schema';

async function findOne(ci:string) {
  const chofer = await prisma.chofer.findUnique({
    where: { ci, isAvailable: true },
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

export async function PATCH(
  request: Request,
  { params }: { params: { ci: string } }
) {
  try {

    const chofer = await findOne(params.ci);

    if (!chofer) {
      return NextResponse.json({ error: 'Driver not found' }, { status: 404 })
    }

    const body = await request.json();

    const result = choferSchemaUpdate.safeParse(body);

    if(result.error) {
      return NextResponse.json(result.error, { status: 400 });
    }

    const { nombre, edad, sexo, ci, licencia, telefono } = result.data;
    
    const updated = await prisma.chofer.update({
      where: { ci: params.ci },
      data: {
        nombre,
        edad,
        sexo,
        ci,
        licencia,
        telefono,
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

export async function DELETE(
  request: Request,
  { params }: { params: { ci: string } }
) {
  try {
    const chofer = await findOne(params.ci);

    if (!chofer) {
      return NextResponse.json({ error: 'Chofer no encontrado' }, { status: 404 })
    }

    await prisma.chofer.update({
      where: { ci: params.ci },
      data: {
        isAvailable: false
      }
    })
    
    return NextResponse.json({ message: 'Driver deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting driver' }, { status: 500 })
  }
} 