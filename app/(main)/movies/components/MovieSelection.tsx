import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const categories: string[] = ["All", "Movie", "TV Shows"];

export default function MovieSelection() {
  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex items-center gap-5 text-[15px] font-semibold">
        {
          categories.map((category, ind) => (
            <button
              key={ind}
              className={cn(
                "rounded-xl capitalize text-foreground/60 hover:text-foreground",
              )}
            >
              {category}
            </button>
          ))
        }
        <p>
          Filter
        </p>
      </div>

      <Button
        size="sm"
        variant="ghost"
        className="text-foreground/60 hover:text-foreground"
      >
        <X size={17} />
        <span className="hidden sm:inline">reset</span>
      </Button>
    </div>
  )
}

