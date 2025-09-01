import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const EventCard = async (business: any) => {
  return (
    <Card className="max-w-xs shadow-none">
      <CardHeader className=" flex-row items-center font-semibold">
        <p>{business.title}</p>
      </CardHeader>
      <CardContent className="text-[15px] text-muted-foreground px-5">
        <p className="truncate">{business.description}</p>
        {business.imageUrl ? (
          <img
            className="mt-5 w-full aspect-video object-cover rounded-xl"
            src={business.imageUrl}
          />
        ) : (
          <div className="mt-5 w-full aspect-video bg-muted rounded-xl" />
        )}
      </CardContent>
      <CardFooter>
        <Link href={`/business/${business.id}`} key={business.id}>
          <Button className="/blocks mt-5 cursor-pointer">
            Ver evento <ArrowRight />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
