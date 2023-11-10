import NavbarWithAvatar from "@/app/(components)/NavbarWithAvatar";
import React from "react";
import TaskCard from "./(components)/TaskCard";
import { getTask } from "./helper/helper";
import { nanoid } from "nanoid";

export default function Task() {
  const tasks: Array<TaskType> = getTask();
  return (
    <>
      <NavbarWithAvatar />
      <div className="h-full w-full pt-[80px] px-4">
        <h1 className="text-2xl font-bold text-center py-4">Daily Task</h1>
        <div className="flex flex-col gap-4">
          {tasks.map((task: TaskType) => {
            return <TaskCard key={nanoid()} task={task} />;
          })}
        </div>
      </div>
    </>
  );
}
