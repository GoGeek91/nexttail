"use client";
import { DialogHeader, DialogTitle } from "@/components/modal/dialog";
import { ModalWrapper } from "@/components/modal/modalWrapper";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";

export const SettingModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <ModalWrapper
        open={open}
        setOpen={setOpen}
        title="Transaction settings"
        modalTriggerclass="cursor-pointer"
        ModalTrigger={<div>Hello</div>}
        content={
          <>
            <div className="space-y-5">
              <DialogHeader>
                <DialogTitle className="text-black">Edit profile</DialogTitle>
                <DialogDescription className="text-black">
                  Make changes to your profile here. Click save when done.
                </DialogDescription>
              </DialogHeader>
              <div className=" space-y-2">
                <div className="">
                  <p className="text-black">full name</p>
                  <input className="p-2 border w-full" type="text" />
                </div>

                <div className="">
                  <p className="text-black">number</p>
                  <input className="p-2 border w-full" type="number" />
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};
