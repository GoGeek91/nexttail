"use client";

import { useMediaQuery } from "@react-hook/media-query";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer";
import { cn } from "@/libs/utils";

interface IModalWrapper {
  title: string;
  content: React.ReactNode;
  ModalTrigger: React.ReactNode;
  modalTriggerclass?: string;
  modalcontentclass?: string;
  drawercontentclass?: string;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}
const ModalWrapper = ({
  title,
  content,
  ModalTrigger,
  modalTriggerclass,
  modalcontentclass,
  drawercontentclass,
  open = false,
  setOpen,
}: IModalWrapper) => {
  const isDesktop = useMediaQuery("(min-width: 520px)");
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className={cn("w-full text-white", modalTriggerclass)} asChild>
          {ModalTrigger}
        </DialogTrigger>
        <DialogContent className="xs:w-[350px] bg-white">
          <DialogHeader className="border-b border-secondary-main">
            <DialogTitle className="text-black">{title}</DialogTitle>
            <DialogPrimitive.Close className="transition duration-300 ease-in-out rounded-md hover:bg-secondary-default hover:bg-opacity-10 p-1 text-black">
              X<span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogHeader>
          <div className={cn("px-5 py-5", modalcontentclass)}>{content}</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={cn("w-full text-white", modalTriggerclass)} asChild>
        {ModalTrigger}
      </DialogTrigger>
      <DialogContent className="xs:w-[350px] bg-white">
        <DialogHeader className="border-b border-secondary-main">
          <DialogTitle className="text-black">{title}</DialogTitle>
          <DialogPrimitive.Close className="transition duration-300 ease-in-out rounded-md hover:bg-secondary-default hover:bg-opacity-10 p-1 text-black">
            X<span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogHeader>
        <div className={cn("px-5 py-5", modalcontentclass)}>{content}</div>
      </DialogContent>
    </Dialog>
  );
};
ModalWrapper.displayName = "ModalWrapper";
export { ModalWrapper };
