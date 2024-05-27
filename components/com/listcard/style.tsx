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
        "min-h-screen min-w-screen flex items-center flex-col py-6 px-1 md:px-[60px] overflow-hidden pt-[100px]",
        className
      )}
    >
      {children}
    </div>
  );
};
