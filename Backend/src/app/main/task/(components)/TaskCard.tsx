"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export default function TaskCard({ task }: { task: TaskType }) {
  return (
    <Card className="w-[350px] flex flex-col items-center">
      <CardHeader className="w-full">
        <CardDescription className="mb-3">{task.task}</CardDescription>
        <Button className="w-full" variant="secondary" disabled>
          {task.reward} Points
        </Button>
      </CardHeader>
    </Card>
  );
}
