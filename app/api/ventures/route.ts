import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const ventures = await prisma.venture.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' },
    });
    return NextResponse.json(ventures);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch ventures' }, { status: 500 });
  }
}
