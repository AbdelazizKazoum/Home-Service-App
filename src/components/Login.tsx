import * as React from "react";

import { cn } from "@/lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function Login({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  //   const isDesktop = useMediaQuery("(min-width: 768px)");

  if (true) {
    return (
      <div className="bg-white">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            style={{ borderRadius: "20px" }}
            className="sm:max-w-[425px] bg-white p-10 rounded-full  "
          >
            <DialogHeader>
              <DialogTitle className=" uppercase text-center mb-5 text-xl font-medium     ">
                Sign in
              </DialogTitle>
              <DialogDescription className=" text-sm text-gray-600 mb-5 ">
                Log in to your Account.
              </DialogDescription>
            </DialogHeader>
            <LoginForm />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

function LoginForm({ className }: React.ComponentProps<"form">) {
  const session = useSession();
  const router = useRouter();

  const [error, setError] = React.useState<string>();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) setError(res.error);
    else console.log(res);

    if (res?.url) router.replace("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid items-start gap-6 my-4     ", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Email dev</Label>
        <Input type="email" id="email" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Password</Label>
        <Input type="password" id="password" defaultValue="" />
      </div>
      <Button className="mt-3 text-white" type="submit">
        Login
      </Button>
      <Button
        className="-mt-2 bg-gray-900 hover:bg-gray-800 text-white"
        type="button"
        onClick={() => signIn("github")}
      >
        Login with Github
      </Button>
      <Button
        className="-mt-2 bg-gray-900 hover:bg-gray-800 text-white"
        type="button"
        onClick={() => signIn("keycloak")}
      >
        Login with Keycloak
      </Button>
      <div>
        <p className=" -mt-3 text-sm text-red-500 ">{error}</p>
      </div>
    </form>
  );
}
