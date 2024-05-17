import prisma from '../../../lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const res = await request.json();
  const { description } = res as { description: string };

  const result = await prisma.activity.create({
    data: {
      description
      },
});
  return NextResponse.json({ result });
}