import { ComponentType, SVGProps } from "react";

declare global {
  export type navItem = {
    name: string;
    href: string;
    Icon: string | ComponentType<SVGProps<SVGSVGElement>>;
  };
}
