import clsx from "clsx";
import React from "react";

export const Wrapper = ({ children, className }: any) => {
  return (
    <div className={clsx(className)}>
      {children}
      <style jsx>{`
        img {
          height: 100% !important;
        }
      `}</style>
    </div>
  );
};
