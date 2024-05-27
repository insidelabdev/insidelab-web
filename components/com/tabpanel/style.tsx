"use client";
import clsx from "clsx";

export const Wrapper = ({
  children,
  theme,
  className,
}: {
  children: React.ReactNode;
  theme?: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "max-w-screen flex items-center flex-col py-6",
        "wrapper-" + theme,
        "tabpanel-" + theme,
        className
      )}
    >
      <div className="container">{children}</div>
    </div>
  );
};
