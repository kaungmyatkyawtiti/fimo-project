import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Movie } from "@/types/movie"

interface MovieCardProps {
  movie: Movie;
  onDetail?: () => void;
  onDelete?: () => void;
}

export default function MovieCard({
  movie,
  onDetail,
  onDelete,
}: MovieCardProps) {
  return (
    <div
      className="flex flex-col justify-between bg-card rounded-xl border border-border/50 shadow-md 
      hover:border-border hover:shadow-lg hover:-translate-y-2 hoverEffect cursor-pointer"
    // onClick={onDetail}
    >
      <div className="relative h-82 sm:h-70 w-full">
        <Image
          src="/movie.jpg"
          alt={movie.title}
          fill
          sizes="auto-fit"
          className="rounded-t-xl object-cover object-bottom"
          priority
        />
      </div>

      <div className="py-4 px-3 space-y-3">
        <p className="font-semibold text-[15px]">{movie.title}</p>
        <p className="text-[12px] text-foreground/60">
          Action | Family | Horror
        </p>

        {
          onDelete &&
          <button
            className="bg-red-400 p-2"
            onClick={onDelete}
          >
            Delete
          </button>
        }

      </div>
    </div>
  )
}
