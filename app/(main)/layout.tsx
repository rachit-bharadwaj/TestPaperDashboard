import { ReactNode } from "react";

// components
import { Navbar } from "@/components/shared";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
