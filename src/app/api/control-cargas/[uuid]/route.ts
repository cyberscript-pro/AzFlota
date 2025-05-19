import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

async function findOne(uuid: string) {
  return prisma.controlCargas.findUnique({
    where: { uuid },
  });
}

type tParams = Promise<{ uuid: string }>;

// PUT update vehicle
export async function PATCH(request: Request, { params }: { params: tParams }) {
  try {
    const param = await params;

    const vehiculoExists = await findOne(param.uuid);

    if (!vehiculoExists) {
      return NextResponse.json({ error: "Vehicle not found" }, { status: 404 });
    }

    const { folio, comprobante } = await request.json();

    const vehiculo = await prisma.controlCargas.update({
      where: { uuid: param.uuid },
      data: {
        folio,
        comprobante,
      },
    });

    return NextResponse.json(vehiculo);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating vehicle", message: error },
      { status: 500 }
    );
  }
}
