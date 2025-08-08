"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface BusinessData {
  title: string;
  description: string;
  startAt: any;
  endAt: any;
  imageUrl: any;
}
interface BusinessResult {
  data?: BusinessData;
  error?: string;
}

async function addBusiness(formData: FormData): Promise<BusinessResult> {
  const titleValue = formData.get("title");
  const descriptionValue = formData.get("description");
  const startDateValue = formData.get("initial-time-picker");
  const endAtDateValue = formData.get("end-time-picker");
  const imageUrlValue = formData.get("businessImage");
  if (!titleValue || titleValue === "" || !descriptionValue) {
    return { error: "Falta um titulo ou uma descrição" };
  }
  const title: string = titleValue.toString();
  const description: string = descriptionValue.toString();
  const startAt: any = startDateValue?.toString();
  const endAt: any = endAtDateValue?.toString();
  const imageUrl: any = imageUrlValue?.toString();
  const { userId } = await auth();

  if (!userId) {
    return { error: "Usuário não encontrado" };
  }

  try {
    const businessData: BusinessData = await db.business.create({
      data: {
        title,
        description,
        startAt,
        endAt,
        userId,
        imageUrl,
      },
    });

    revalidatePath("/");

    return { data: businessData };
  } catch (error) {
    return { error: "Evento não adicionado" };
  }
}
export default addBusiness;
