// shadcn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// icons
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="p-5 border-b flex justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-1 items-center outline-none">
          <p>Default Project</p>
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select a project</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Project 1</DropdownMenuItem>
          <DropdownMenuItem>Project 2</DropdownMenuItem>
          <DropdownMenuItem>Project 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="flex gap-5 items-center">
        <Image src="/icons/gift.svg" alt="gift icon" width={25} height={25} />
        <Image src="/icons/bell.svg" alt="bell icon" width={25} height={25} />
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-1 items-center outline-none">
            <Image
              src="/images/user.svg"
              alt="bell icon"
              width={35}
              height={35}
            />
            <p>Daren Joe</p>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
