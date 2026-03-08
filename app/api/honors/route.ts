import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const honors = await prisma.honor.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json(honors);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch honors' }, { status: 500 });
  }
}
