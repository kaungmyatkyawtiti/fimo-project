import { cn } from "@/lib/utils";

interface FancyBtnProps {
  children: React.ReactNode;
  className?: string;
}

export default function FancyBtn({
  children,
  className,
}: FancyBtnProps) {
  return (
    <button
      className={cn(
        "rounded-lg text-white font-semibold p-4 flex items-center gap-2 text-[15px]",
        className
      )}
    >
      {children}
    </button>
  )
}

