import CarouselMultiple from "./carousel-02";

export default function BusinessSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Próximos eventos</h2>
      <div className="flex overscroll-x-auto">
        <CarouselMultiple />
      </div>
    </div>
  );
}
