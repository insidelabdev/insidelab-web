"use client";
import clsx from "clsx";

export const Wrapper = ({ children, className }: any) => {
  return (
    <div
      className={clsx(
        "min-h-fit h-fit min-w-screen flex items-center flex-col pt-[100px] bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};
