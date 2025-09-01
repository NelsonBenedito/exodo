import { useId } from "react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  icon: IconName;
};
export default function InputIcon({
  className,
  placeholder,
  type,
  icon,
  ...props
}: Props & React.ComponentProps<"input">) {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <div className="relative">
        <Input
          id={id}
          className={cn("peer ps-9", className)}
          placeholder={placeholder}
          type={type}
          {...props}
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <DynamicIcon name={icon} size={16} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
