import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import { choferSchemaUpdate } from "@/app/validations/backend/chofer-update.schema";

async function findOne(ci: string) {
  const chofer = await prisma.choferesDespedidos.findUnique({
    where: { choferCI: ci },
  });

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
      return NextResponse.json({ error: "Driver not found" }, { status: 404 });
    }

    return NextResponse.json(chofer);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching driver", message: error },
      { status: 500 }
    );
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
      return NextResponse.json(
        { error: "Chofer no encontrado" },
        { status: 404 }
      );
    }

    await prisma.chofer.update({
      where: { ci },
      data: {
        isAvailable: true,
      }
    })

    await prisma.choferesDespedidos.delete({
      where: { choferCI: ci },
    });

    return NextResponse.json({ message: "Driver deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting driver", message: error },
      { status: 500 }
    );
  }
}
