import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { choferSchemaPost } from "@/app/validations/backend/chofer-post.schema";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;

    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      return NextResponse.json(
        { error: "Parámetros page y limit deben ser números positivos" },
        { status: 400 }
      );
    }

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
    });

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

    const { nombre, ci, licencia } = result.data;

    const chofer = await prisma.chofer.create({
      data: {
        nombre,
        ci,
        licencia,
      },
    });

    return NextResponse.json(chofer, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating driver" },
      { status: 500 }
    );
  }
}
