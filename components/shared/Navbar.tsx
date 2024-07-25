"use client";

import Link from "next/link";
import Image from "next/image";

// icons
import { HiMenu } from "react-icons/hi";

// shadcn
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navPages, navRedirects } from "@/constants";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="bg-primary-400">
      {/* mobile screen */}
      <Sheet>
        <SheetTrigger className="p-3">
          <HiMenu className="text-2xl text-primary-400" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-primary-400 border-none text-gray-400 pt-16 pb-5 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-1">
            {navPages.map((item) => (
              <SheetClose key={item.name} asChild>
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 p-3 hover:bg-primary-300 rounded-lg ${
                    item.href === path ? "bg-primary-200 text-white" : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="h-5 w-fit"
                  />
                  <span>{item.name}</span>
                </Link>
              </SheetClose>
            ))}

            <hr className="h-0 bg-transparent border-gray-500 mt-5" />
          </div>
          <div className="flex flex-col">
            {navRedirects.map((item) => (
              <SheetClose key={item.name} asChild>
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 p-3 hover:bg-primary-300 rounded-lg ${
                    item.href === "/" ? "bg-primary-200 text-white" : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={500}
                    height={500}
                    className="h-5 w-fit"
                  />
                  <span>{item.name}</span>
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
