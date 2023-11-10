"use client";

import NavbarWithAvatar from "@/app/(components)/NavbarWithAvatar";
import Map from "./Map";

export default function ShowMap() {
  return (
    <>
      <NavbarWithAvatar />
      <div className="h-full w-full flex flex-col pt-[80px]">
        <h1 className="text-2xl font-bold text-center py-4">
          Nearby Recycling Bin
        </h1>
        <Map />
      </div>
    </>
  );
}
