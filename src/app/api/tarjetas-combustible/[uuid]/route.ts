import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'
import { dateSchema, tarjetaSchemaUpdate } from '@/app/validations/backend/tarjeta-post.schema'

async function findOne(uuid:string) {
  const tarjeta = await prisma.tarjetaCombustible.findUnique({
    where: { uuid, isAvailable: true },
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

  return tarjeta;
}

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

    const tarjetaExists = await findOne(params.uuid);

    if (!tarjetaExists) {
      return NextResponse.json({ error: 'Fuel card not found' }, { status: 404 })
    }

    const body = await request.json();

    const result = tarjetaSchemaUpdate.safeParse(body);

    if(!result.success) {
      return NextResponse.json(result.error, { status: 400 });
    }

    const { numero, pin, estado, fecha_vencimiento } = result.data;

    const vencimiento = dateSchema.parse(fecha_vencimiento);
    
    const tarjeta = await prisma.tarjetaCombustible.update({
      where: { uuid: params.uuid },
      data: {
        numero,
        pin: pin,
        estado,
        fecha_vencimiento: vencimiento,
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
    return NextResponse.json({ error: 'Error updating fuel card', message: error }, { status: 500 })
  }
}

// DELETE fuel card
export async function DELETE(
  request: Request,
  { params }: { params: { uuid: string } }
) {
  try {
    await prisma.tarjetaCombustible.update({
      where: { uuid: params.uuid },
      data: {
        isAvailable: false
      }
    })
    
    return NextResponse.json({ message: 'Fuel card deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting fuel card' }, { status: 500 })
  }
} 