import { RunningFrames, RunningJobs } from "@/components/dashboard";
import type { Metadata } from "next";

export default function Home() {
  return (
    <main className="p-5 min-h-screen">
      <div className="flex flex-col gap-5">
        <RunningJobs />
        <RunningFrames />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Dashboard",
};
