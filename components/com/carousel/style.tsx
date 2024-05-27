"use client";
import clsx from "clsx";

export const Wrapper = ({
  children,
  className,
  theme,
}: {
  children: React.ReactNode;
  className?: string;
  theme?: string;
}) => {
  return (
    <div
      className={clsx(
        "xl:min-h-screen min-w-screen flex items-center flex-col bg-[#1e1e1e]",
        "wrapper-" + theme,
        "carousel-" + theme,
        className
      )}
    >
      {children}
    </div>
  );
};
