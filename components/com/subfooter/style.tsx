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
        "min-h-[60vh] min-w-screen w-screen flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};
