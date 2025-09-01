import { NextResponse, type NextRequest } from "next/server";
import { pinata } from "@/utils/config";
import { useAuth } from "@clerk/nextjs";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;
    const { cid } = await pinata.upload.public.file(file);
    await pinata.gateways.public.get(cid).optimizeImage({
      width: 650,
      format: "webp",
    });
    const url = await pinata.gateways.public.convert(cid);
    return NextResponse.json(url, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";

export async function GET() {
  const userIsLogged = useAuth();

  if (!userIsLogged) {
    return;
  }

  try {
    const url = await pinata.upload.public.createSignedURL({
      expires: 30, // The only required param
    });
    return NextResponse.json({ url: url }, { status: 200 }); // Returns the signed upload URL
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { text: "Error creating API Key:" },
      { status: 500 }
    );
  }
}
