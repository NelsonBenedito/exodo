import { Button, buttonVariants } from "@/components/ui/button";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
type Props = {
  icon: IconName;
  text: string;
};

export default function ButtonIcon({
  className,
  icon,
  text,
  variant,
  ...props
}: Props &
  VariantProps<typeof buttonVariants> &
  React.ComponentProps<"button">) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Button className="cursor-pointer" variant={variant} {...props}>
        <DynamicIcon name={icon} />
        {text}
      </Button>
    </div>
  );
}
