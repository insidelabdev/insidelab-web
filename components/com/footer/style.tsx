"use client";
import clsx from "clsx";

export const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "min-w-full flex items-center flex-col bg-[#B3C445] px-2 z-[999]",
        className
      )}
    >
      {children}
    </div>
  );
};
