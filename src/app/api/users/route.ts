import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma'
import bcrypt from 'bcryptjs'

// GET all users
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        nickname: true,
        role: true,
        isActive: true,
        isAvailable: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching users' }, { status: 500 })
  }
}

// POST create new user
export async function POST(request: Request) {
  try {
    const { nickname, password, role } = await request.json()
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { nickname },
    })
    
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)
    
    const user = await prisma.user.create({
      data: {
        nickname,
        password: hashedPassword,
        role,
      },
    })
    
    return NextResponse.json({
      id: user.id,
      nickname: user.nickname,
      role: user.role,
      isActive: user.isActive,
      isAvailable: user.isAvailable,
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating user' }, { status: 500 })
  }
} 