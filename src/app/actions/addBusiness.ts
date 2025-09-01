"use server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { useAuth } from "@clerk/nextjs";

interface BusinessResult {
  data?: any;
  error?: string;
}

async function addBusiness(formData: FormData): Promise<BusinessResult> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const startDateValue = formData.get("startDate") as string | null;
  const endDateValue = formData.get("endDate") as string | null;
  const startTimeValue = formData.get("startTime") as string | null;
  const endTimeValue = formData.get("endTime") as string | null;
  const imageUrl = formData.get("businessImageUrl") as string | null;

  const startDateTime =
    startDateValue && startTimeValue
      ? new Date(`${startDateValue}T${startTimeValue}`)
      : undefined;

  const endDateTime =
    endDateValue && endTimeValue
      ? new Date(`${endDateValue}T${endTimeValue}`)
      : undefined;

  if (!title?.trim() || !description?.trim()) {
    return { error: "Falta título ou descrição" };
  }

  const user = await currentUser();
  if (!user) return { error: "Usuário não autenticado" };

  try {
    let imageRecord = null;
    if (imageUrl) {
      imageRecord = await db.image.create({
        data: {
          filename: title.trim(),
          imageUrl,
        },
      });
    }

    const business = await db.business.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        startAt: startDateTime,
        endAt: endDateTime,
        userId: user?.id,
        imageId: imageRecord?.id || null,
      },
      include: { image: true },
    });

    revalidatePath("/");
    return { data: business };
  } catch (err) {
    console.error(err);
    return { error: "Erro ao criar evento" };
  }
}

export default addBusiness;
