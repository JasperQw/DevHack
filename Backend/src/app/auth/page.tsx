"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./(component)/login";
import Signup from "./(component)/signup";
import { useState } from "react";
import NavbarWithoutAvatar from "../(components)/NavbarWithoutAvatar";

export default function Auth() {
  const [tab, setTab] = useState<string>("login");
  return (
    <div className="w-full h-full flex justify-center items-center px-3">
      <NavbarWithoutAvatar />
      <Tabs
        value={tab}
        onValueChange={(value) => {
          setTab(value);
        }}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign up</TabsTrigger>
        </TabsList>
        <Login />
        <Signup setTab={setTab} />
      </Tabs>
    </div>
  );
}
