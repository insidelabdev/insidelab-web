"use client";
import clsx from "clsx";

export const Wrapper = ({ children, className }: any) => {
  return (
    <div
      className={clsx(
        "min-h-full min-w-full w-full md:flex flex-col justify-center items-center pl-0 md:pl-4 overflow-hidden hidden relative h-screen",
        "xs:hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
