import { NextRequest, NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'
import { choferSchemaUpdate } from '@/app/validations/backend/chofer-update.schema';

async function findOne(ci: string) {
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

type tParams = Promise<{ ci: string }>;

export async function GET(
  request: NextRequest,
  { params }: { params: tParams }
) {
  try {
    const { ci } = await params;
    
    const chofer = await findOne(ci);

    if (!chofer) {
      return NextResponse.json({ error: 'Driver not found' }, { status: 404 })
    }

    return NextResponse.json(chofer);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching driver', message: error }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: tParams }
) {
  try {

    const param = await params;

    const chofer = await findOne(param.ci);

    if (!chofer) {
      return NextResponse.json({ error: 'Driver not found' }, { status: 404 })
    }

    const body = await request.json();

    const result = choferSchemaUpdate.safeParse(body);

    if (result.error) {
      return NextResponse.json(result.error, { status: 400 });
    }

    const { nombre, edad, sexo, ci, licencia, telefono } = result.data;

    const updated = await prisma.chofer.update({
      where: { ci: param.ci },
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
    return NextResponse.json({ error: 'Error updating driver', message: error }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: tParams }
) {
  try {

    const { ci } = await params;

    const chofer = await findOne(ci);

    if (!chofer) {
      return NextResponse.json({ error: 'Chofer no encontrado' }, { status: 404 })
    }

    await prisma.chofer.update({
      where: { ci },
      data: {
        isAvailable: false
      }
    })

    return NextResponse.json({ message: 'Driver deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting driver', message: error }, { status: 500 })
  }
} 