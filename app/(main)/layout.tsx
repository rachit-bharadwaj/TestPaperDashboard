import { ReactNode } from "react";

// components
import { Header, Navbar } from "@/components/shared";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Navbar />

      <div className="flex flex-1 flex-col gap-5 overflow-y-auto h-fit bg-[#f5f6f6]">
        <Header />

        {children}
      </div>
    </div>
  );
}
