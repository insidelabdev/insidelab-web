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
            const { children, icon, label, link, type, className } = action;
            const IconComponent = icon_types[icon];

            return (
              <Button
                key={idx}  // Clave única basada en el índice
                className={clsx(
                  "btn-action",
                  type || "default",
                  "xs:text-sm xs:py-4",
                  className
                )}
                color={type}
              >
                {link ? (
                  <Link href={link} passHref>
                    <div
                      className={clsx(
                        "link text-black font-bold",
                        "flex justify-start items-center gap-1",
                        "xs:text-sm xs:py-4",
                        type
                      )}
                    >
                      {icon && IconComponent &&
                        React.createElement(IconComponent, { ...action })}
                      {label}
                    </div>
                  </Link>
                ) : (
                  <div
                    className={clsx(
                      "link text-black font-bold",
                      "flex justify-start items-center gap-1",
                      "xs:text-sm xs:py-4",
                      type
                    )}
                  >
                    {icon && IconComponent &&
                      React.createElement(IconComponent, { ...action })}
                    {label}
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
