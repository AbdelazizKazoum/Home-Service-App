"use client";
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

export function Signup({
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
              <DialogTitle className=" text-center mb-5 text-2xl font-medium     ">
                Register
              </DialogTitle>
              <DialogDescription className=" text-sm text-gray-600 mb-5 ">
                Log in to your Account.
              </DialogDescription>
            </DialogHeader>
            <ProfileForm />
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  //   return (
  //     <Drawer open={open} onOpenChange={setOpen}>
  //       <DrawerTrigger asChild>
  //         <Button variant="outline">Edit Profile</Button>
  //       </DrawerTrigger>
  //       <DrawerContent>
  //         <DrawerHeader className="text-left">
  //           <DrawerTitle>Edit profile</DrawerTitle>
  //           <DrawerDescription>
  //             Make changes to your profile here. Click save when you're done.
  //           </DrawerDescription>
  //         </DrawerHeader>
  //         <ProfileForm className="px-4" />
  //         <DrawerFooter className="pt-2">
  //           <DrawerClose asChild>
  //             <Button variant="outline">Cancel</Button>
  //           </DrawerClose>
  //         </DrawerFooter>
  //       </DrawerContent>
  //     </Drawer>
  //   );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.status == 400) {
        console.log("this email is allridy in use !!");
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid items-start gap-6 my-4     ", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Password</Label>
        <Input type="password" id="username" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Confirm Password</Label>
        <Input type="password" id="password" defaultValue="" />
      </div>
      <Button className="mt-3 text-white" type="submit">
        Create Account
      </Button>

      <div>
        <p className=" text-sm ">You don't have account !,</p>
      </div>
    </form>
  );
}
