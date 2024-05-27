"use client";
import clsx from "clsx";

export const Wrapper = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "min-w-screen flex items-center flex-col bg-white z-[99] overflow-y-scroll",
        className
      )}
    >
      {children}
    </div>
  );
};
