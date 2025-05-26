import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // const session = await getServerSession(authOptions);

    // if (!session) {
    //   return NextResponse.json(
    //     { error: "No autorizado" },
    //     { status: 401 }
    //   );
    // }

    // const { searchParams } = new URL(request.url);
    // const page = parseInt(searchParams.get("page") || "1");
    // const limit = parseInt(searchParams.get("limit") || "10");
    // const skip = (page - 1) * limit;

    // const [vehiculosBaja, total] = await Promise.all([
    //   prisma.vehiculoBaja.findMany({
    //     skip,
    //     take: limit,
    //     include: {
    //       vehiculo: {
    //         select: {
    //           chapa: true,
    //           marca: true,
    //           tipo: true,
    //         },
    //       },
    //     },
    //     orderBy: {
    //       fecha_baja: "desc",
    //     },
    //   }),
    //   prisma.vehiculoBaja.count(),
    // ]);

    // const totalPages = Math.ceil(total / limit);

    // return NextResponse.json({
    //   data: vehiculosBaja,
    //   pagination: {
    //     total,
    //     totalPages,
    //     currentPage: page,
    //     hasNextPage: page < totalPages,
    //     hasPrevPage: page > 1,
    //   },
    // });
  } catch (error) {
    console.error("Error al obtener vehículos de baja:", error);
    return NextResponse.json(
      { error: "Error al obtener vehículos de baja" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    

    const body = await request.json();
    const { vehiculoChapa } = body;

    if (!vehiculoChapa) {
      return NextResponse.json(
        { error: "La chapa del vehículo es requerida" },
        { status: 400 }
      );
    }

    const vehiculo = await prisma.vehiculo.findUnique({
      where: { chapa: vehiculoChapa },
    });

    if (!vehiculo) {
      return NextResponse.json(
        { error: "Vehículo no encontrado" },
        { status: 404 }
      );
    }

    // const vehiculoBaja = await prisma.vehiculoBaja.create({
    //   data: {
    //     vehiculoChapa,
    //     fecha_baja: new Date(),
    //   },
    //   include: {
    //     vehiculo: {
    //       select: {
    //         chapa: true,
    //         marca: true,
    //         tipo: true,
    //       },
    //     },
    //   },
    // });

    // await prisma.vehiculo.update({
    //   where: { chapa: vehiculoChapa },
    //   data: { disponible: false },
    // });

    //return NextResponse.json(vehiculoBaja);
  } catch (error) {
    console.error("Error al dar de baja el vehículo:", error);
    return NextResponse.json(
      { error: "Error al dar de baja el vehículo" },
      { status: 500 }
    );
  }
}
