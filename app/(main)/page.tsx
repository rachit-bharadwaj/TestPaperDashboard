import type { Metadata } from "next";

// components
import {
  ActiveJobs,
  Balance,
  Chart,
  RunningFrames,
  RunningJobs,
  Storage,
} from "@/components/dashboard";

export default function Home() {
  return (
    <main className="p-5 min-h-screen flex gap-5">
      <div className="flex flex-col gap-5 w-2/3">
        <RunningJobs />
        <RunningFrames />
        <ActiveJobs />
      </div>

      <div className="w-1/3">
        <Chart />

        <div className="flex flex-wrap gap-5 lg:flex-nowrap">
          <Balance />
          <Storage />
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Dashboard",
};
