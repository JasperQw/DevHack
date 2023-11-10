"use client";
import NavbarWithAvatar from "@/app/(components)/NavbarWithAvatar";
import React from "react";
import { articleType } from "../dto/dto";
import getArticles from "../(components)/articles";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function ArticlePage({ params }: { params: any }) {
  const article: articleType = getArticles()[params.id as number];
  return (
    <>
      <NavbarWithAvatar />
      <div className="h-full w-full pt-[80px]">
        <div className="bg-yellow-100 w-full h-[10rem] bg-cover bg-center bg-[url(https://images.pexels.com/photos/4668356/pexels-photo-4668356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)]"></div>
        <div className="w-full px-7">
          <h1 className="font-semibold text-2xl mt-4 capitalize">
            {article.title}
          </h1>
          <small className=" text-slate-500">
            {article.time} minutes reading
          </small>
          <p className="my-4 text-sm text-justify text-slate-500 italic">
            {article.desc}
          </p>
          <Separator />
          {article.content.split("\n").map((line) => {
            return <p className="mt-4 text-justify indent-8">{line}</p>;
          })}
          <div className="flex justify-end">
            <Button className="my-4">Get Points!</Button>
          </div>
        </div>
      </div>
    </>
  );
}
