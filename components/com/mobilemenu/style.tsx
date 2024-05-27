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
        "min-h-[70vh] min-w-screen flex items-center justify-center flex-col pt-[30px]",
        className
      )}
    >
      {children}
    </div>
  );
};
