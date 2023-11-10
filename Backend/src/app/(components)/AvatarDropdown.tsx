"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BookOpenText,
  FileStack,
  LogOut,
  Map,
  ScanLine,
  User2,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserData } from "../main/helper/helper";
import { useRouter } from "next/navigation";

export default function AvatarDropdown() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    points: 0,
  });

  useEffect(() => {
    let data;
    (async () => {
      data = await getUserData();
      setUser(data);
    })();
  }, []);

  const router = useRouter();
  async function logout() {
    try {
      const req = await fetch("/api/logout");
      const res = await req.json();
      if (res.status === 200) {
        router.push("/auth");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-4 pr-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        className="w-[10rem]"
      >
        <DropdownMenuLabel>Login As</DropdownMenuLabel>
        <DropdownMenuLabel className="font-normal">
          {user.username}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-200" />
        <DropdownMenuItem
          asChild
          className="flex items-center gap-3 cursor-pointer"
        >
          <Link href={"/main/scanner"}>
            <ScanLine width={"20px"} height={"20px"} /> Scan
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="flex items-center gap-3 cursor-pointer"
        >
          <Link href={"/main/map"}>
            <Map width={"20px"} height={"20px"} /> Nearby
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="flex items-center gap-3 cursor-pointer"
        >
          <Link href={"/main/education"}>
            <BookOpenText width={"20px"} height={"20px"} /> Education
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="flex items-center gap-3 cursor-pointer"
        >
          <Link href={"/main/task"}>
            <FileStack width={"20px"} height={"20px"} /> Task
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="flex items-center gap-3 cursor-pointer"
        >
          <Link href={"/main"}>
            <User2 width={"20px"} height={"20px"} /> Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={logout}
          className="flex items-center gap-3 cursor-pointer"
        >
          <LogOut width={"20px"} height={"20px"} /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
