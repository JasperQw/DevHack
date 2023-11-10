"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SuccessScan() {
  return (
    <Card className="w-[350px] flex flex-col items-center">
      <CardHeader>
        <CardTitle>Successfully Gain Points!</CardTitle>
        <CardDescription>
          Recycle more to unlock more achievements!
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between w-full">
        <Button variant="outline" asChild>
          <Link href={"/main"}>Profile</Link>
        </Button>
        <Button
          onClick={() => {
            window.location.reload();
          }}
        >
          Scan Again
        </Button>
      </CardFooter>
    </Card>
  );
}
