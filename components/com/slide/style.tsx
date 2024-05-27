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
        //"min-h-0 min-w-screen flex items-center justify-center flex-col py-5 slide-background",
        "min-h-auto min-w-screen pt-6 pb-4 overflow-hidden",
        "wrapper-" + theme,
        "slide-" + theme,
        className
      )}
    >
      {children}
    </div>
  );
};
