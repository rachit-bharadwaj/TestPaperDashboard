import Image from "next/image";

export default function Storage() {
  return (
    <section className="bg-white border p-5 rounded-xl flex-col flex gap-3">
      <p className="text-xl font-semibold">Storage</p>

      <Image
        src="/images/dummyStorage.svg"
        alt="dummy storage"
        width={500}
        height={500}
        className="w-28 h-full"
      />

      <button className="border-primary-200 border text-primary-200 p-3 rounded-full">
        Recharge Now
      </button>
    </section>
  );
}
