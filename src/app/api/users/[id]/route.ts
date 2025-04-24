import { NextResponse } from 'next/server'
import prisma from '../../../../lib/prisma'
import bcrypt from 'bcryptjs'

// GET user by id
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
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

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching user' }, { status: 500 })
  }
}

// PUT update user
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { nickname, password, role, isActive, isAvailable } = await request.json()
    
    const updateData: any = {
      nickname,
      role,
      isActive,
      isAvailable,
    }
    
    if (password) {
      updateData.password = await bcrypt.hash(password, 10)
    }
    
    const user = await prisma.user.update({
      where: { id: parseInt(params.id) },
      data: updateData,
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
    
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating user' }, { status: 500 })
  }
}

// DELETE user
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.user.delete({
      where: { id: parseInt(params.id) },
    })
    
    return NextResponse.json({ message: 'User deleted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting user' }, { status: 500 })
  }
} 