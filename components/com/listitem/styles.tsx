"use client";
import clsx from "clsx";

export const Wrapper = ({
  children,
  theme = "light",
  className,
}: {
  children: React.ReactNode;
  className?: string;
  theme?: string;
}) => {
  return (
    <div
      className={clsx(
        "xl:min-h-[90vh] xs:min-h-auto min-w-screen flex items-center justify-center",
        "wrapper-" + theme,
        "list-item-" + theme,
        className
      )}
    >
      {children}
      <style jsx>{`
        .list-item-dark h2.title {
          color: red !important;
        }
      `}</style>
    </div>
  );
};
