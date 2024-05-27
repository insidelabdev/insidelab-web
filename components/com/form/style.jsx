"use client";
import clsx from "clsx";

export const Wrapper = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "min-h-screen min-w-screen w-full flex flex-col justify-center items-center pl-0 md:pl-4",
        className
      )}
    >
      {children}
    </div>
  );
};
