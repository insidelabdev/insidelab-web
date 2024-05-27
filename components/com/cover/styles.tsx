"use client";
import clsx from "clsx";
import * as icons from "@/components/icons";
import React from "react";
import Link from "next/link";

export const Wrapper = ({ children, className, style, floatButton }: any) => {
  const icon_types: any = {
    ...icons,
  };
  return (
    <div
      style={style}
      className={clsx(
        "min-h-screen min-w-screen flex justify-center items-center relative",
        className
      )}
    >
      {children}
      <style jsx>{`
        .btn-action .primary {
          border-radius: 50px !important;
        }
        .cover-dark::before {
          transition: all;
          transition-duration: 0.5s;
          content: " ";
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100vh;
          background: rgb(0 0 0 / 60%);
          z-index: 1;
        }
        .cover-dark {
          .cover-content {
            z-index: 2;
          }
        }
      `}</style>
      {floatButton && (
        <div
          className={clsx(
            "bg-primary rounded-[50%] p-2 flex items-center justify-center bottom-3 right-3 sm:right-6 gap-3 text-black font-bold hover:cursor-pointer fixed z-[99]",
            "sm:bg-black sm:rounded-[24px] sm:px-3"
          )}
        >
          <Link
            href={floatButton.link}
            target="_blank"
            className="flex items-center justify-center gap-1"
          >
            {React.createElement(icon_types[floatButton.icon])}
            <span className="hidden sm:flex">{floatButton.label}</span>
          </Link>
        </div>
      )}
    </div>
  );
};
