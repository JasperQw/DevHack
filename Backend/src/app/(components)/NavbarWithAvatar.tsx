"use client";
import Link from "next/link";
import process from "process";
import AvatarDropdown from "./AvatarDropdown";

export default function NavbarWithAvatar() {
  return (
    <nav className="bg-white z-[100] py-5 pl-5 pr-3 fixed left-0 right-0 flex justify-between items-center">
      <div>
        <Link href={"/main"}>
          <h1 className="font-semibold">{process.env.NEXT_PUBLIC_APP_NAME}</h1>
        </Link>
      </div>
      <div>
        <AvatarDropdown />
      </div>
    </nav>
  );
}
