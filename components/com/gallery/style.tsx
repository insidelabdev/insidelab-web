"use client";
import clsx from "clsx";

export const Wrapper = ({
  children,
  theme,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: any;
  theme?: string;
}) => {
  return (
    <div
      style={style}
      className={clsx(
        "min-w-screen flex items-center flex-col py-6",
        theme == "dark" ? "bg-background" : "bg-white",
        "wrapper-" + theme,
        "gallery-" + theme,
        className
      )}
    >
      {children}
    </div>
  );
};
