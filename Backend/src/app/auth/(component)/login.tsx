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
import { login } from "../(actions)/loginActions";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const router = useRouter();
  const [loginState, loginAction] = useFormState(login, {
    error: "",
    success: false,
  });

  useEffect(() => {
    if (loginState.error !== "") {
      formRef.current?.reset();
    }

    if (loginState.success === true) {
      toast({
        description: "Successfully Login!",
      });
      router.push("/main");
    }
  }, [loginState]);
  return (
    <TabsContent value="login">
      <form ref={formRef} action={loginAction}>
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Login into your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                type="email"
                id="email"
                placeholder="example@email.com"
              />
              {loginState.error !== "" ? (
                <p className="text-sm text-red-500 font-bold">
                  {loginState.error}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input name="password" type="password" id="password" />
            </div>
            {loginState.error !== "" ? (
              <p className="text-sm text-red-500 font-bold">
                {loginState.error}
              </p>
            ) : (
              ""
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit">Login</Button>
          </CardFooter>
        </Card>
      </form>
    </TabsContent>
  );
}
