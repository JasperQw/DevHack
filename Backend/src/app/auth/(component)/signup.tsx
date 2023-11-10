"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { signup } from "../(actions)/signupActions";
import { useToast } from "@/components/ui/use-toast";
import { useFormState } from "react-dom";
import { Dispatch, SetStateAction, useEffect } from "react";

export default function Signup({
  setTab,
}: {
  setTab: Dispatch<SetStateAction<string>>;
}) {
  const { toast } = useToast();
  const [signupState, signupActions] = useFormState(signup, {
    success: false,
    email: {
      error: "",
    },
    password: {
      error: "",
    },
  });

  useEffect(() => {
    if (signupState.success) {
      toast({
        title: "Successful sign up!",
        description: "Please login to your account",
      });
      setTab("login");
    }
  }, [signupState]);
  return (
    <TabsContent value="signup">
      <form action={signupActions}>
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Create a new account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="example@email.com"
              />
            </div>
            {signupState.email.error !== "" ? (
              <p className="text-sm text-red-500 font-bold">
                {signupState.email.error}
              </p>
            ) : (
              ""
            )}
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input
                name="username"
                id="username"
                type="username"
                placeholder="JohnDoe"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input name="password" id="password" type="password" />
            </div>
            {signupState.password.error !== "" ? (
              <p className="text-sm text-red-500 font-bold">
                {signupState.password.error}
              </p>
            ) : (
              ""
            )}
            <div className="space-y-1">
              <Label htmlFor="confirm_password">Confirm Password</Label>
              <Input
                name="confirm_password"
                id="confirm_password"
                type="password"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Sign Up</Button>
          </CardFooter>
        </Card>
      </form>
    </TabsContent>
  );
}
