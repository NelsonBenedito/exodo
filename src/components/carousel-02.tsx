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
import { Business } from "@/generated/prisma";
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
          business.map((business: Business) => (
            <CarouselItem
              key={business.id}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <EventCard title={business.title} description={business.description} imageUrl={business.imageUrl}/>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
