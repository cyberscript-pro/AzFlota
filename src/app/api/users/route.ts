import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import bcrypt from "bcryptjs";
import { userSchemaBack } from "@/app/validations/backend/user.schema";

// GET all users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        nickname: true,
        nombre: true,
        ci: true,
        password: true,
        role: true,
        isAvailable: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching users", message: error },
      { status: 500 }
    );
  }
}

// POST create new user
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = userSchemaBack.safeParse(body);

    if (result.error) {
      return NextResponse.json(result.error, { status: 400 });
    }

    const { nickname, nombre, ci, password, role } = result.data;

    const existingUsername = await prisma.user.findUnique({
      where: { nickname },
    });

    const existingCI = await prisma.user.findUnique({
      where: { ci },
    });

    if (existingUsername || existingCI) {
      return NextResponse.json({ error: "Usuario ya existe" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        nickname,
        nombre,
        ci,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json(
      {
        nickname: user.nickname,
        role: user.role,
        isAvailable: user.isAvailable,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Error creating user", message: error }, { status: 500 });
  }
}
