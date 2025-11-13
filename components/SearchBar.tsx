// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
//
// export default function SearchBar() {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Share</Button>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle>Share link</DialogTitle>
//           <DialogDescription>
//             Anyone who has this link will be able to view this.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="flex items-center gap-2">
//           <div className="grid flex-1 gap-2">
//             <Input
//               id="link"
//               defaultValue="https://ui.shadcn.com/docs/installation"
//               readOnly
//             />
//           </div>
//         </div>
//         <DialogFooter className="sm:justify-start">
//           <DialogClose asChild>
//             <Button type="button" variant="secondary">
//               Close
//             </Button>
//           </DialogClose>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }

"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { ArrowRight } from "lucide-react"
import { DialogTitle } from "@radix-ui/react-dialog"
import { Search } from "lucide-react";
import { Kbd, KbdGroup } from "./ui/kbd";
import MyLogo from "./MyLogo"

const searches = [
  "The Movie",
  "The Life of a blah blah and idk",
  "killing love",
  "The sharks",
  "Doom",
  "Life of Pi",
  "Colorful house",
];

export default function SearchBar() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-[13px] rounded-lg text-foreground/80 hover:text-foreground group"
        >
          <Search size={17} />
          <span>Search movies/TV Shows</span>
          <div>
            <KbdGroup>
              <Kbd className="group-hover:text-foreground">CtrlK</Kbd>
            </KbdGroup>
          </div>
        </Button>
      </DialogTrigger>

      <DialogContent
        className="p-0 shadow-lg border-0 sm:max-w-[550px] overflow-hidden rounded-xl bg-popover"
        aria-describedby={undefined}
      >
        <DialogHeader className="px-4 pt-4">
          <DialogTitle className="text-center">
            <MyLogo />
          </DialogTitle>
        </DialogHeader>

        <Command className="pt-2 pb-5 rounded-none bg-popover">
          <CommandInput
            placeholder="Search movies/ TV Shows..."
            className="font-medium"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup
              heading="Movies"
            >
              {
                searches.map((search, ind) =>
                  <CommandItem
                    key={ind} className="py-2 font-medium">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    {search}
                  </CommandItem>
                )
              }
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
