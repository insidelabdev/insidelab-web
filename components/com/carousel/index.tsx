import { Wrapper } from "./style";
import { Card, CardBody, CardFooter, Avatar } from "@nextui-org/react";
import * as icons from "@/components/icons";
import { Button } from "@nextui-org/button";
import Link from "next/link";
// import Link from "@/components/Link"
import clsx from "clsx";
import React from "react";

const Carousel = ({
  title,
  description,
  items,
  theme,
  actions,
}: {
  title: string;
  description: string;
  theme: string;
  items: any;
  actions: any[];
}) => {
  const icon_types: any = {
    ...icons,
  };

  return (
    <Wrapper theme={theme}>
      <div
        className={clsx(
          "text-center max-w-[660px] pt-2 px-1",
          "xs:pb-4 xs:pt-6 xs:px-2"
        )}
      >
        {description && (
          <h3 className="text-[18px] md:text-[35px]">{description}</h3>
        )}
        <h2
          className="xs:text-lg xl:text-md leading-[24px] md:leading-[60px] title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
      <section className={clsx("xl:container", "lg:container")}>
        <div
          className={clsx(
            "scroll-list scroll-horizontal flex w-screen h-full place-items-top overflow-x-scroll items-center lg:items-stretch",
            "max-w-full",
            "xl:pt-4 xl:pb-4 xl:px-1 xl:grid-cols-3 xl:grid",
            "lg:pt-4 lg:pb-4 lg:px-1 lg:grid-cols-3 lg:grid",
            "md:gap-x-[20px] md:gap-y-[20px] md:px-[120px] md:overflow-x-visible",
            "sm:gap-x-[20px] sm:gap-y-[20px]",
            "xs:gap-x-[20px] xs:gap-y-[20px]",
            "xs:pb-4 xs:pt-0 xs:px-1"
          )}
        >
          {items.map((item: any, idx: number) => (
            <Card
              className={clsx(
                "bg-[#313131] border-[#505050] border",
                "xs:max-w-[325px] xs:min-w-[315px] xs:mx-[6px] xs:snap-center xs:inline-block",
                "sm:max-w-[325px] sm:min-w-[315px] sm:mx-[6px] sm:snap-center sm:inline-block",
                "md:max-w-[325px] md:min-w-[315px] md:mx-[6px] md:snap-center md:inline-block",
                "lg:max-w-full lg:min-w-auto lg:mx-[0px]",
                "xl:max-w-full xl:min-w-auto xl:mx-[0px]"
              )}
              key={`${item}-${idx}`}
            >
              <CardBody>
                <p
                  className="text-[#D7D7D7] text-[17px]"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></p>
              </CardBody>
              <CardFooter>
                <div>
                  <Avatar
                    src={item.picture}
                    className="bg-white"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="flex flex-col pl-4 text-[#D7D7D7] max-w-[190px]">
                  <p className="text-[14px] font-medium">{item.author}</p>
                  <p className="text-[14px] leading-[16px]">{item.profile}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      {actions && actions.length > 0 && (
        <section className="tools flex justify-start items-center gap-2 px-1 mb-4 pb-4">
          {actions.map((action: any, idx: number) => {
            const { children } = action;
            return (
              <Button
                key={`${action}-${idx}`}
                className={clsx(
                  "btn-action mt-4",
                  action.type || "default",
                  "xs:text-sm xs:py-4",
                  action.className
                )}
                color={action.type}
              >
                {action.icon &&
                  React.createElement(
                    icon_types[action.icon],
                    {
                      ...action,
                    },
                    children
                  )}
                {action.link ? (
                  <Link
                    className={clsx(
                      "link text-black font-bold",
                      "flex justify-start items-center gap-1 text-[20px]",
                      action.type
                    )}
                    href={action.link}
                  >
                    {action.label}
                  </Link>
                ) : (
                  <span
                    className={clsx(
                      "link text-black font-bold",
                      "flex justify-start items-center gap-1",
                      action.type
                    )}
                  >
                    {action.icon &&
                      React.createElement(icon_types[action.icon], {
                        ...action,
                      })}
                    {action.label}
                  </span>
                )}
              </Button>
            );
          })}
        </section>
      )}
    </Wrapper>
  );
};

export default Carousel;
