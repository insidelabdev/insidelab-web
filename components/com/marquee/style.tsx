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
        "min-w-screen w-screen max-h-fit h-fit flex items-center flex-col overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
