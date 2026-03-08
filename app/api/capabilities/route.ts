import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const capabilities = await prisma.capability.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
    });
    return NextResponse.json(capabilities);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch capabilities' }, { status: 500 });
  }
}
