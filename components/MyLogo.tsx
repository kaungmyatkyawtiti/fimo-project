import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image"

interface MyLogoProps {
  className?: string;
  spanDesign?: string;
  imgSize?: number;
}

export default function MyLogo({
  className,
  spanDesign,
  imgSize,
}: MyLogoProps) {
  return (
    <Link
      href={"/"}
      className="inline-flex items-center"
    >
      {
        imgSize &&
        <Image
          src="/avatar.jpg"
          alt="fimo"
          width={imgSize}
          height={imgSize}
          className="mr-2"
        />
      }
      <h2
        className={cn(
          "text-2xl font-bold uppercase group hoverEffect text-foreground hover:text-movie-orange",
          className
        )}
      >
        Fi<span className={cn(
          "text-movie-orange group-hover:text-foreground",
          spanDesign
        )}>
          mo
        </span>
      </h2>
    </Link>
  )
}
