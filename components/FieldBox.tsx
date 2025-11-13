import { cn } from "@/lib/utils";
import { ReactNode } from "react"

interface FieldBoxProps {
  children: ReactNode;
  className?: string;
}

export default function FieldBox({
  children,
  className,
}: FieldBoxProps) {
  return (
    <div
      className={cn(
        "w-full flex items-center bg-transparent border border-border h-12 rounded-full overflow-hidden gap-4 px-5",
        className
      )}
    >
      {children}
    </div>
  )
}

