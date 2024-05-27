"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { Wrapper } from "./style";
import * as components from "../index";
import clsx from "clsx";
const MarqueeComponent = ({
  title,
  subtitles,
  elements,
  rounded,
  className,
  speed = 30,
  height = 20,
  theme,
}: {
  title: string;
  subtitles: string[];
  elements: any;
  rounded: boolean;
  className: string;
  speed: number;
  height: number;
  theme: string;
}) => {
  return (
    <Wrapper className={className}>
      {title && (
        <h2
          className={clsx(
            "text-[22px] md:text-[55px] font-bold py-1",
            theme === "dark" ? "text-white" : "text-black"
          )}
        >
          {title}
        </h2>
      )}
      {subtitles && (
        <div className="w-full md:flex justify-around font-bold px-2 hidden">
          {subtitles.map((subtitle: any, index: number) => (
            <h3 key={`${subtitle}-${index}`}>{subtitle}</h3>
          ))}
        </div>
      )}
      <Marquee
        speed={speed}
        style={{
          height: "30%",
          width: "100%",
          margin: "0",
        }}
        loop={0}
        autoFill
      >
        <div
          className={clsx(
            "min-h-fit gap-2 min-w-full flex justify-start items-center overflow-visible px-2 py-2"
          )}
        >
          {elements &&
            elements.map((elem: any, index: number) => {
              const { children } = elem;
              return (
                <div
                  key={index}
                  className={clsx(elem.className || "")}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: rounded ? "50%" : "",
                    background: rounded ? "#FFF" : "",
                    display: "block",
                    position: "relative",
                  }}
                >
                  {React.createElement(
                    components[elem.xtype || "image"],
                    {
                      key: index,
                      height: 50,
                      width: 100,
                      fill: true,
                      objectFit: "contain",
                      objectPosition: "center",
                      className: clsx(
                        "mr-1 max-w-none h-[20px] w-[80px] sm:h-auto sm:w-auto sm:max-w-full"
                      ),
                      ...elem,
                    },
                    children
                  )}
                </div>
              );
            })}
        </div>
      </Marquee>
    </Wrapper>
  );
};
export default MarqueeComponent;
