import { Button } from "@nextui-org/button";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Wrapper } from "./style";
import * as icons from "@/components/icons";

const Banner = ({ title, description, background, actions, ...props }: any) => {
  const icon_types: any = {
    ...icons,
  };
  return (
    <Wrapper {...props}>
      <div
        className="banner grid place-items-center w-screen xl:h-screen xs:h-[70vh] text-white before:content-[' '] before:w-full before:h-full before:top-0 before:left-0 before:bg-red-700 before:absolute bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="banner-container flex flex-col items-center justify-center gap-y-4 max-w-[820px] z-50 text-center">
          <h3
            dangerouslySetInnerHTML={{ __html: description }}
            className="title text-xl sm:text-xl md:text-[30px] font-bold"
          />
          <h2
            className="text-xl leading-[30px] md:leading-[55px] sm:text-xxl md:text-[60px] lg:text-[60px] lg:leading-[63px] font-bold px-2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {actions.map((action: any, idx: number) => {
            const { children } = action;
            return (
              <Button
                key={`${action}-${idx}`}
                className={clsx(
                  "btn-action",
                  action.type || "default",
                  "xs:text-sm xs:py-4",
                  action.className
                )}
                color={action.type}
              >
                {action.link ? (
                  <Link href={action.link} passHref legacyBehavior>
                    <a
                      className={clsx(
                        "link text-black font-bold",
                        "flex justify-start items-center gap-1",
                        "xs:text-sm xs:py-4",
                        action.type
                      )}
                    >
                      {action.icon &&
                        React.createElement(
                          icon_types[action.icon],
                          {
                            ...action,
                          },
                          children
                        )}
                      {action.label}
                    </a>
                  </Link>
                ) : (
                  <div
                    className={clsx(
                      "link text-black font-bold",
                      "flex justify-start items-center gap-1",
                      "xs:text-sm xs:py-4",
                      action.type
                    )}
                  >
                    {action.icon &&
                      React.createElement(icon_types[action.icon], {
                        ...action,
                      })}
                    {action.label}
                  </div>
                )}
              </Button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
export default Banner;
