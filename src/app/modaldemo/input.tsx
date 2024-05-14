"use client";

import { cn } from "@/libs/utils";
import React, { useState } from "react";
export interface InputCommonTypes {
  isCopyableInput?: boolean;
  copyableInputValue?: string;
  copyclass?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, InputCommonTypes {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isCopyableInput, copyableInputValue, copyclass, ...props }, ref) => {
    const [isClicked, setIsClicked] = useState(false);
    const copylink = async () => {
      if (copyableInputValue !== undefined) {
        await navigator.clipboard.writeText(copyableInputValue);
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 2000);
      }
    };

    return !isCopyableInput ? (
      <input
        type={type}
        className={cn(
          "p-1.5 w-full font-normal border rounded-md outline-none border-secondary-light text-secondary-default",
          className
        )}
        ref={ref}
        {...props}
      />
    ) : (
      <div
        className={cn(
          "flex w-full p-1.5 font-normal text-sm border rounded-md outline-none border-secondary-light text-secondary-default items-center",
          copyclass
        )}
      >
        <div
          className={cn("w-fit bg-transparent mr-1.5 truncate", className)}
          contentEditable={false}
          ref={ref}
          {...props}
        >
          {copyableInputValue}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };
