import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../../../lib/prisma';

export async function DELETE(request: NextRequest, { params }: { params: { id: number } }) {
  const id = params.id;

  const activity = await prisma.activity.delete({
    where: { id },
  });

  return NextResponse.json(activity);
}
