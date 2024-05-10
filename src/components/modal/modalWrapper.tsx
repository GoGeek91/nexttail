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
        <DialogTrigger className={cn("w-full text-black", modalTriggerclass)} asChild>
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
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className={cn("", modalTriggerclass)}>
        {ModalTrigger}
      </DrawerTrigger>
      <DrawerContent className="w-full bg-white">
        <DrawerHeader className="border-b border-secondary-main">
          <DrawerTitle className="">{title}</DrawerTitle>
          <DialogPrimitive.Close className="transition duration-300 ease-in-out rounded-md hover:bg-secondary-default hover:bg-opacity-10 p-1 text-black">
            X<span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DrawerHeader>
        <div
          className={cn(
            "px-3 pt-3 xl:pt-3 lg:pt-3 md:pt-3 sm:pt-3 xl:pb-3 lg:pb-3 md:pb-3 sm:pb-3 pb-6",
            drawercontentclass
          )}
        >
          {content}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
ModalWrapper.displayName = "ModalWrapper";
export { ModalWrapper };
