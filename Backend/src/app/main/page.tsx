"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavbarWithAvatar from "../(components)/NavbarWithAvatar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUserData } from "./helper/helper";
import BadgesCarousel from "./(components)/BadgesCarousel";
import AvatarCarousel from "./(components)/AvatarCarousel";
export default function MainPage() {
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
  return (
    <>
      <NavbarWithAvatar />
      <div className="h-full w-full pt-[80px]">
        <div className="w-full flex flex-col items-center gap-4">
          <div className="w-full flex justify-center items-center bg-center bg-cover h-[15rem] bg-[url(https://images.pexels.com/photos/1660603/pexels-photo-1660603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]">
            <Avatar className="h-[10rem] w-[10rem]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold">{user.username}</h1>
            <p className="font-thin">Recycling Master</p>
            <p className="font-thin">Points: {user.points}</p>
          </div>
        </div>
        <BadgesCarousel />
        <AvatarCarousel />
      </div>
    </>
  );
}
