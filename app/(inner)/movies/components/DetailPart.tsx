import { Movie } from "@/types/movie"
import Image from "next/image"
import { MonitorDown, Play, StarIcon } from "lucide-react"
import FancyBtn from "@/components/FancyBtn";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface DetailPartProps {
  movie: Movie;
}

export default function DetailPart({ movie }: DetailPartProps) {
  const isMobile = useIsMobile()

  return (
    <div
      className="flex flex-col xl:flex-row justify-between py-5 gap-6 mb-10"
    >
      <div
        className={cn(
          "relative shrink-0",
          isMobile ? "max-w-[460px] h-98" : "w-[260px] h-74"
        )}
      >
        <Image
          src="/movie.jpg"
          alt={movie.title}
          fill
          sizes="auto-fit"
          className="object-cover rounded-xl object-bottom"
          priority
        />
      </div>

      <div className="flex flex-col space-y-6 justify-between">
        <div className="flex flex-col lg:flex-row space-y-6">
          <div className="flex flex-col gap-4 flex-2">
            <h3 className="font-semibold text-2xl line-clamp-1">
              {movie.title}
            </h3>

            <p className="text-sm text-foreground/70">
              2025 |
              R |
              2 h 29 m |
              Drama |
              Fantasy |
              Horror
            </p>

            <p className="text-[13px] text-foreground/90">
              In Northern England, a man heads out on a journey into the woods to reconnect with the estranged hermit brother with whom he shared a complicated past
              that was altered by life-changing events decades ago.
            </p>
          </div>

          <div
            className="border-0 lg:border-l lg:border-border 
            flex lg:flex-col items-center justify-between lg:justify-center gap-4 flex-1"
          >
            <h2
              className="font-semibold flex items-center gap-2 text-movie-orange
              text-[clamp(1.25rem,2vw,2rem)]"
            >
              <StarIcon size={22} />
              <div>
                6.8{" "}
                <span className="text-[clamp(0.9rem,1.5vw,1.25rem)] text-foreground/70">
                  / 10
                </span>
              </div>
            </h2>
            <p className="text-[clamp(0.75rem,1vw,1rem)] text-foreground/70">
              0 people rated
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <FancyBtn
            className="bg-movie-orange hover:bg-movie-orange/90"
          >
            <Play size={20} />
            Watch Online
          </FancyBtn>
          <FancyBtn
            className="bg-movie-down-btn hover:bg-movie-down-btn/90"
          >
            <MonitorDown size={20} />
            Watch in App
          </FancyBtn>
        </div>
      </div>
    </div >
  )
}
