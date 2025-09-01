import BusinessSection from "@/components/businessSection";
import EventCard from "@/components/card";
import CarouselMultiple from "@/components/carousel-02";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="items-center justify-items-center min-h-screen pb-20 sm:px-20">
        <section
          id="inicial"
          className="flex flex-row w-full h-screen items-center justify-self-start relative"
        >
          <div className="z-10">
            <h1 className="font-bold text-6xl text-shadow-[0px_0px_20px] text-shadow-amber-50">
              Boas vindas a Ibrejetibá
            </h1>
            <p className="text-2xl text-shadow-[0px_0px_15px] text-shadow-amber-50">
              Casa de Deus, minha família!
            </p>
          </div>
          <img
            className="w-full max-w-2xl mt-16 top-0 right-0 absolute"
            src="/assets/images/HeroPage.png"
            alt="Pastores da ibrejetibá"
          />
        </section>
        <section className="flex w-full gap-5 flex-col h-screen justify-center" id="events">
          <BusinessSection />
        </section>
        <section className="flex flex-col h-screen justify-center" id="about">
          <h2 className="font-bold text-4xl">Sobre Nós</h2>
          <p className="text-xl text-justify">
            Somos a Igreja Batista em Renovação Espiritual, conhecida como
            Ibrejetibá. Nos identificamos com os princípios batistas e somos
            vinculados à Convenção Batista Nacional no Espírito Santo, Brasil.{" "}
            <br />
            Uma igreja composta por várias categorias de pessoas e de membros
            regenerados e batizados, que voluntariamente se reúnem sob a lei de
            Cristo, procurando expandir o Reino de Deus. <br /> Nosso povo forma
            uma igreja vibrante, intensa e envolvente, trabalhando dentro da
            cultura de estarmos sempre servindo a Deus também na vida das
            pessoas de forma alegre, dinâmica e moderna, por meio de muitos
            mecanismos e pelo discipulado, para reproduzir a vida de Cristo nos
            outros. <br /> Temos uma liderança em crescimento pessoal e com
            disposição de ampliar ainda mais o impacto da igreja na sociedade.
            Nossa liderança é comprometida e com desejo de foco e crescimento.{" "}
            <br />
            Somos uma igreja que está conectada com o que está acontecendo e que
            espera ser pastoreada.
          </p>
        </section>
      </div>
    </main>
  );
}
