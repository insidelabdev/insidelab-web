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
        "max-w-screen flex items-center flex-col py-6",
        className
      )}
    >
      <div className="container">{children}</div>
    </div>
  );
};
