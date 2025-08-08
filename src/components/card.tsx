import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
const EventCard = async (business: any) => {
  return (
    <Card className="max-w-xs shadow-none">
      <CardHeader className=" flex-row items-center font-semibold">
        <p>{business.title}</p>
      </CardHeader>
      <CardContent className="text-[15px] text-muted-foreground px-5">
        <p className="truncate">{business.description}</p>
        {business.imageUrl && (
          <image className="w-full" href={business.imageUrl} />
        )}
        <div className="mt-5 w-full aspect-video bg-muted rounded-xl" />
      </CardContent>
      <CardFooter>
        <Button className="/blocks">
          Ver evento <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
