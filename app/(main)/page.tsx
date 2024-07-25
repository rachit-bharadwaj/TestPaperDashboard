import type { Metadata } from "next";

export default function Home() {
  return (
    <main className="flex min-h-screen text-3xl flex-col items-center p-24"></main>
  );
}

export const metadata: Metadata = {
  title: "Dashboard",
};
