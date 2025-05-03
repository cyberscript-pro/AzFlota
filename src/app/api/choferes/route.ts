import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { choferSchemaPost } from "@/app/validations/backend/chofer-post.schema";

export async function GET(request: NextRequest) {
  try {
    const choferes = await prisma.chofer.findMany({
      where: {
        isAvailable: true,
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
      orderBy: {
        nombre: 'asc'
      }
    });

    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || choferes.length;

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return NextResponse.json(
        { error: "Parámetros page y limit deben ser números positivos" },
        { status: 400 }
      );
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const totalItems = choferes.length;
    const totalPages = Math.ceil(totalItems / limit);

    const paginatedItems = choferes.slice(startIndex, endIndex);

    return NextResponse.json({
      data: paginatedItems,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        itemsPerPage: limit,
        hasNextPage: endIndex < totalItems,
        hasPrevPage: startIndex > 0,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching drivers", message: error },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = choferSchemaPost.safeParse(body);

    if (result.error) {
      return NextResponse.json(result.error, { status: 400 });
    }

    const { nombre, edad, sexo, ci, licencia, telefono } = result.data;

    const chofer = await prisma.chofer.create({
      data: {
        nombre,
        edad,
        sexo,
        ci,
        licencia,
        telefono,
      },
    });

    return NextResponse.json(chofer, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creando chofer" },
      { status: 500 }
    );
  }
}

// export async function PATCH(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');

//     if (!id) {
//       return NextResponse.json(
//         { error: "ID no proporcionado" },
//         { status: 400 }
//       );
//     }

//     const body = await request.json();
//     const { nombre, edad, sexo, ci, licencia } = body;

//     const chofer = await prisma.chofer.update({
//       where: {
//         ci
//       },
//       data: {
//         nombre,
//         edad,
//         sexo,
//         ci,
//         licencia,
//       },
//       include: {
//         vehiculos: {
//           select: {
//             uuid: true,
//             chapa: true,
//             marca: true,
//             tipo: true,
//           },
//         },
//       },
//     });

//     return NextResponse.json(chofer);
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Error actualizando chofer", message: error },
//       { status: 500 }
//     );
//   }
// }
