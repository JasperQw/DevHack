"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { articleType } from "../dto/dto";
import Link from "next/link";

export default function ArticleCard({
  article,
  id,
}: {
  article: articleType;
  id: number;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription className="overflow-ellipsis line-clamp-3">
          {article.desc}
        </CardDescription>
      </CardHeader>
      <CardFooter className="w-full flex justify-between items-center">
        <small className="text-gray-400">{article.time} minit reads</small>
        <Button asChild>
          <Link href={`/main/education/${id}`}>Read</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
