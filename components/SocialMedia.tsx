import { Facebook, Github, Slack, Twitch, Youtube } from "lucide-react"
import Link from "next/link"

const socials = [
  {
    title: "Youtube",
    icon: <Youtube size={18} />,
    href: "",
  },
  {
    title: "Facebook",
    icon: <Facebook size={18} />,
    href: "",
  },
  {
    title: "Github",
    icon: <Github size={18} />,
    href: "",
  },
  {
    title: "Slack",
    icon: <Slack size={18} />,
    href: "",
  },
  {
    title: "Twitch",
    icon: <Twitch size={18} />,
    href: "",
  },
]

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-3">
      {
        socials.map((social, ind) =>
          <Link
            key={ind}
            href={social.href}
            target="_blank"
            className="p-2 rounded-full bg-black/5 dark:bg-white/60 text-black/80 
            hover:text-movie-orange hover:bg-black/10 dark:hover:bg-white hover:shadow-md hover-effect"
          >
            {social.icon}
          </Link>
        )
      }
    </div >
  )
}
