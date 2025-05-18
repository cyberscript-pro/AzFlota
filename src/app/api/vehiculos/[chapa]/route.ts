import {NextResponse} from 'next/server'
import prisma from '../../../../lib/prisma'

async function findOne(chapa: string) {
  return prisma.vehiculo.findUnique({
    where: {chapa},
    include: {
      chofer: {
        select: {
          nombre: true,
          ci: true,
          licencia: true,
        },
      },
      tarjeta: {
        select: {
          numero: true,
          estado: true,
          fecha_vencimiento: true,
          saldo: true,
        },
      },
    },
  });
}

type tParams = Promise<{ chapa: string }>;

export async function GET(
  request: Request,
  { params }: { params: tParams }
) {
  try {

    const { chapa } = await params;

    const vehiculo = await findOne(chapa); 

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

    const param = await params;

    const vehiculoExists = await findOne(param.chapa); 

    if (!vehiculoExists) {
      return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 })
    }

    const { chapa, marca, tipo, consumo_km, area, chofer, tarjeta } = await request.json()
    
    const vehiculo = await prisma.vehiculo.update({
      where: { chapa: param.chapa },
      data: {
        chapa,
        marca,
        tipo,
        consumo_km: parseInt(consumo_km),
        areaTrabajoUuid: area,
        choferCI: chofer,
        tarjetaNumero: tarjeta
      },
      include: {
        areaTrabajo: {
          select: {
            uuid: true,
            nombre: true,
            centro_costo: true,
            jefe: true
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

    const { chapa } = await params;

    const vehiculo = await findOne(chapa); 

    if (!vehiculo) {
      return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 })
    }

    await prisma.vehiculo.delete({
      where: { chapa },
    })
    
    return NextResponse.json({ message: 'Vehicle deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting vehicle', message: error }, { status: 500 })
  }
} 