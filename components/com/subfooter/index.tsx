"use client";
import React from "react";
import { Wrapper } from "./style";
import * as icons from "@/components/icons";
import clsx from "clsx";

const Subfooter = ({ items, theme }: any) => {
  const icon_types: any = {
    ...icons,
  };
  return (
    <Wrapper>
      <section className="flex flex-col md:flex-row justify-evenly items-start md:items-center h-full gap-4 w-screen px-2 py-4 md:p-0">
        {items.map((item: any, index: number) => {
          const { children } = item;
          return (
            <div
              key={`${item.label}-${index}`}
              className="flex flex-col gap-1 max-w-[300px]"
            >
              <div>
                {React.createElement(
                  icon_types[item.icon],
                  {
                    ...item,
                    size: 36,
                    className: "fill-primary",
                  },
                  children
                )}
              </div>
              <p
                className={theme === "dark" ? "text-white" : "text-black"}
                dangerouslySetInnerHTML={{ __html: item.label }}
              ></p>
            </div>
          );
        })}
      </section>
    </Wrapper>
  );
};
export default Subfooter;
