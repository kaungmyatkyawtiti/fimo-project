"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangSelection } from "./LangSelection";
import { BookOpen, Clapperboard, HeartHandshake, Home, MessageCircleReply, Panda, PartyPopper, Tv } from "lucide-react";
import SocialMedia from "./SocialMedia";
import { useIsMobile } from "@/hooks/use-mobile";

export const links = [
  {
    title: "Home",
    href: "/",
    icon: <Home size={19} />
  },
  {
    title: "TV Show",
    href: "/tv-series",
    icon: <Tv size={19} />
  },
  {
    title: "Movies",
    href: "/movies",
    icon: <Clapperboard size={19} />
  },
  {
    title: "Animation",
    href: "/animated",
    icon: <Panda size={19} />
  },
  {
    title: "Novels",
    href: "/novels",
    icon: <BookOpen size={19} />
  },
  {
    title: "Most Watched",
    href: "/ranking-lists",
    icon: <PartyPopper size={19} />
  },
  {
    title: "Support",
    href: "/support",
    icon: <HeartHandshake size={19} />
  },
  {
    title: "Feedback",
    href: "/feedback",
    icon: <MessageCircleReply size={19} />
  },
]

export default function NavPanel() {
  const pathname = usePathname();
  const isMobile = useIsMobile()

  return (
    <div
      className={cn(
        "py-5 px-2 flex flex-col gap-4",
        isMobile && "px-3"
      )}
    >
      <div className="text-center">
        <LangSelection />
      </div>
      <nav className="flex flex-col space-y-2">
        {
          links.map((link, ind) =>
            <Link
              key={ind}
              href={link.href}
              className={cn(
                "text-foreground/90 hover:text-foreground hover:bg-accent py-2 px-3 rounded-md hoverEffect font-semibold text-[15px] flex items-center gap-2",
                pathname === link.href && "text-movie-orange hover:text-movie-orange bg-accent"
              )}
            >
              {link.icon}
              {link.title}
            </Link>
          )
        }
      </nav>
      <div className={cn(
        "px-2",
        isMobile ? "self-start" : "self-center"
      )}>
        <SocialMedia />
      </div>
    </div>
  )
}
