import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const nickname = searchParams.get("nickname");
  const ci = searchParams.get("ci");
  const rol = searchParams.get("rol");

  try {
    if (nickname) {
      const user = await prisma.user.findUnique({
        where: { nickname },
      });

      return NextResponse.json({ exists: user });
    } else if (ci) {
      const user = await prisma.user.findUnique({
        where: { ci },
      });

      return NextResponse.json({ exists: user });
    } else if (rol) {
      if (rol === "DIRECTOR" || rol === "SUPERVISOR") {
        const users = await prisma.user.findMany({
          where: { role: rol },
        });

        if (users.length > 0) {
          return NextResponse.json({ exists: users });
        } else {
          return NextResponse.json({ exist: null });
        }
      } else {
        return NextResponse.json({ exist: null });
      }
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching user", message: error },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { nickname, password } = await request.json();

  try {
    const user = await prisma.user.findUnique({
      where: { nickname },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Contraseña incorrecta" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      nickname: user.nickname,
      role: user.role.toLowerCase(),
      ci: user.ci,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching credentials", message: error },
      { status: 500 }
    );
  }
}
