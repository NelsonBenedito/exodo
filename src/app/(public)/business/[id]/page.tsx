import getBusinessBtId from "@/app/actions/getBusinessById";
import ButtonIcon from "@/components/buttonIcon";
import Countdown from "@/components/countDown";
import NewJoinForm from "@/components/joinBusiness";
import Image from "next/image";
export default async function Business({ params }: { params: { id: string } }) {
  const { id } = await params;
  const { business } = await getBusinessBtId(id);
  const businesImage: any = business?.image?.imageUrl;
  if (!business) {
    ("use client");
    return (
      <div className="flex h-screen pt-16 items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl">Sentimos muito mas...</h1>
          <p className="text-gray-400 text-2xl">O evento não existe mais😢</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col">
      <section className="flex w-full flex-col justify-start h-screen pt-[5rem] px-15 ">
        <div className="relative w-full h-full">
          <ButtonIcon
            variant="secondary"
            text="Editar"
            icon="edit"
            className="right-0 mt-5 mr-5 absolute z-10"
          />
          <Image
            src={businesImage}
            alt="imagem do evento"
            className="object-cover rounded-lg shadow-xl"
            fill
          />
        </div>
      </section>
      <section className="flex w-full gap-5 justify-start items-center h-screen flex-col px-15">
        <div className="flex justify-center gap-3 items-center flex-col py-8">
          <h1 className="capitalize font-bold text-6xl">{business?.title}</h1>
          <p className="text-2xl text-center w-full text-gray-400">
            {business?.description}
          </p>
        </div>
        <Countdown targetDate={business.endAt} />
        <NewJoinForm className="w-full" />
      </section>
    </main>
  );
}
