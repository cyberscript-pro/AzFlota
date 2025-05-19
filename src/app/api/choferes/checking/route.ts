import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ci = searchParams.get("ci");
  const licencia = searchParams.get("licencia");

  try {
    if (ci) {
      const chofer = await prisma.chofer.findUnique({
        where: { ci },
      });

      return NextResponse.json({ ci: chofer });
    } else if (licencia) {
      const chofer = await prisma.chofer.findUnique({
        where: { licencia },
      });

      return NextResponse.json({ licencia: chofer });
    }
  } catch (error) {
    return NextResponse.json({ error: "Error fetching driver", message: error }, { status: 500 });
  }
}
