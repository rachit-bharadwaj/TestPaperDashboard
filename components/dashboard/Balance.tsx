import React from "react";

export default function Balance() {
  return (
    <section className="bg-white border p-5 rounded-xl flex-col flex gap-3">
      <p className="font-semibold text-xl">Balance</p>

      <div className="font-bold flex">
        <p>$</p>
        <p className="text-3xl">458</p>
      </div>

      <div className="flex gap-3 flex-wrap lg:gap-5">
        <div>
          <p className="text-gray-400">Coupon</p>
          <div className="font-semibold flex">
            <p className="text-xs">$</p>
            <p className="text-lg">458</p>
          </div>
        </div>

        <div className="border" />

        <div>
          <p className="text-gray-400">Credits</p>
          <div className="font-semibold flex">
            <p className="text-xs">$</p>
            <p className="text-lg">0</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        <p className="text-gray-400">Hours Remaining</p>
        <p>20:59:09</p>
      </div>

      <button className="border-primary-200 border text-primary-200 p-3 rounded-full">
        Recharge Now
      </button>
    </section>
  );
}
