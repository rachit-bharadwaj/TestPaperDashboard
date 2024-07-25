import { StaticImport } from "next/dist/shared/lib/get-img-props";

declare global {
  export type NavItem = {
    name: string;
    href: string;
    icon: string | StaticImport;
  };

  export type RunningStats = {
    name: string;
    icon: string | StaticImport;
    count: number;
  };
}
