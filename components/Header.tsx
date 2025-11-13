import AdminPotion from "./AdminPortion";
import MyContainer from "./MyContainer";
import MyLogo from "./MyLogo";
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Header() {
  return (
    <header
      className="p-4 border-b border-border top-0 z-50 sticky backdrop-blur-lg bg-background/70"
    >
      <div
        className="flex flex-col lg:flex-row items-start
        lg:items-center justify-between text-foreground/80 gap-4"
      >
        {/* logo */}
        <div className="flex items-center gap-3">
          <SidebarTrigger className="rounded-full p-1" />
          <MyLogo imgSize={38} />
        </div>

        {/* admin */}
        <AdminPotion />
      </div>

    </header>
  )
}

