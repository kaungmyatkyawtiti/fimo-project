import { LogOut } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import SearchBar from "./SearchBar";

export default function AdminPotion() {
  return (
    <div className="flex items-center justify-between gap-4 w-full lg:w-auto">
      <SearchBar />
      <div className="flex items-center gap-4">
        <ModeToggle />
      </div>
    </div>
  )
}
