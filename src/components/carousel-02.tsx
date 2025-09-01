import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import EventCard from "@/components/card";
import getBusiness from "@/app/actions/getBusiness";

export default async function CarouselMultiple() {
  const { business } = await getBusiness();
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {business &&
          business.map((item) => (
            <CarouselItem
              key={item.id}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <EventCard title={item.title} description={item.description} imageUrl={item.image?.imageUrl ?? ""} id={item.id}/>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
