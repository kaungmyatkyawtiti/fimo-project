"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Clapperboard, HeartHandshake, Home, MessageCircleReply, Panda, PartyPopper, Tv } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

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

  return (
    <SidebarGroup>
      <SidebarMenu className="gap-3">
        {
          links.map((link, ind) =>
            <Link
              key={ind}
              href={link.href}
            >
              <SidebarMenuItem>
                <SidebarMenuButton
                  className={cn(
                    "w-full text-foreground/80 hover:text-foreground hover:bg-accent font-semibold text-[15px] hover-effect",
                    pathname === link.href && "text-movie-orange hover:text-movie-orange bg-accent"
                  )}
                >
                  {link.icon}
                  {link.title}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Link>
          )}
      </SidebarMenu>
    </SidebarGroup>
  )
}
