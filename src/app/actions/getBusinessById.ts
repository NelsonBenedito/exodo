"use server";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@/generated/prisma";

type BusinessWithImage = Prisma.BusinessGetPayload<{
  include: { image: true };
}>;
async function getBusiness(id: any): Promise<{
  business?: BusinessWithImage | null;
  error?: string;
}> {
  try {
    const business = await db.business.findFirst({
      where: { id },
      include: { image: true },
    });

    return { business };
  } catch (error) {
    return { error: "Database error" };
  }
}

export default getBusiness;
