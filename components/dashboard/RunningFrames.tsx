import { runningStats } from "@/constants";
import Image from "next/image";

export default function RunningFrames() {
  return (
    <section className="p-5 bg-white border rounded-xl flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="text-xl">Running Frames</p>

        <div className="flex items-center gap-1">
          <p>This week</p>
          <Image
            src="/icons/triangle.svg"
            alt="triangle icon"
            width={14}
            height={14}
          />
        </div>
      </div>

      <div className="flex justify-between gap-5 flex-wrap">
        {runningStats.map((item: RunningStats) => (
          <div key={item.name} className="flex flex-col gap-2">
            <div className="p-2 bg-primary-100 rounded-full w-fit">
              <Image src={item.icon} alt={item.name} width={25} height={25} />
            </div>
            <p className="uppercase text-gray-400">{item.name}</p>

            <p className="text-xl font-bold">{item.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
