import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const keywords = await prisma.searchKeyword.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json(keywords);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch search keywords' }, { status: 500 });
  }
}
