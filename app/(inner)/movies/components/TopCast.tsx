import { SubTitle } from "@/components/ui/text"
import { Sub } from "@radix-ui/react-dropdown-menu"
import Image from "next/image"

const casts = [
  { name: "Nott Nott", image: "/avatar.jpg" },
  { name: "Luna Ray", image: "/avatar.jpg" },
  { name: "Kai Storm", image: "/avatar.jpg" },
]

export default function TopCast() {
  return (
    <div className="mb-10">
      <SubTitle className="mb-4">
        Top Casts ({casts.length})
      </SubTitle>
      <div className="flex gap-3">
        {casts.map((cast, ind) =>
          <div
            key={ind}
            className="w-35 bg-card rounded-lg flex flex-col items-center border border-border 
            shadow-sm hover:shadow-md hover:scale-105 hoverEffect"
          >
            <Image
              src={cast.image}
              alt={cast.name}
              width={160}
              height={200}
              className="rounded-t-lg object-cover"
            />
            <h2 className="py-4 text-center font-medium text-foreground/90 text-sm">
              {cast.name}
            </h2>
          </div>
        )}
      </div>
    </div>
  )
}
