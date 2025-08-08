        
'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { Business } from '@/generated/prisma';

async function getBusiness(): Promise<{
  business?: Business[];
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const business = await db.business.findMany({
      where: { userId },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return { business };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getBusiness;