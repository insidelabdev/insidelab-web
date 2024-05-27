"use client";
import clsx from "clsx";

export const Wrapper = ({
  children,
  className,
  theme = "light",
}: {
  children: React.ReactNode;
  className?: string;
  theme?: string;
}) => {
  return (
    <div
      className={clsx(
        "xl:min-h-[80vh] xs:min-h-[70vh] min-w-full flex items-center flex-col bg-white relative",
        "wrapper-" + theme,
        className
      )}
    >
      {children}
    </div>
  );
};
