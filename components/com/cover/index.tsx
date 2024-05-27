import { Button } from "@nextui-org/button";
import { Wrapper } from "./styles";
import Image from "@/components/com/image";
import clsx from "clsx";
import React from "react";
import * as icons from "@/components/icons";
import * as components from "@/components/com";
import { Link } from "@nextui-org/link";
import { poppins, Visby } from "@/config/fonts";
const Cover = ({ options }: { options: any }) => {
  let { sections } = options;
  const icon_types: any = {
    ...icons,
  };
  const components_types: any = {
    ...components,
  };
  let cover = sections.find((item: any) => item.name == "cover");
  if (!cover) return null;
  let {
    className,
    actions,
    actionClassName,
    descriptionClassName,
    titleClassName,
    titleStyle,
    theme,
    themeMobile,
    floatButton,
  } = cover;
  return (
    <Wrapper
      /* style={{
        backgroundImage: `url(${cover.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "auto",
      }} */
      style={{
        marginTop: 75,
      }}
      className={clsx(
        "mt-[65px]",
        "cover-" + theme,
        cover.background
          ? "w-screen h-screen grid xl:grid-cols-2 gap-6 justify-center bg-red ms-center bg-gradient-to-r from-blue-500 to-purple-500 p-8"
          : "container grid xl:grid-cols-2 gap-6 justify-center items-center",
        className
      )}
      floatButton={floatButton}
    >
      <div className={clsx("w-screen h-screen")}>
        {cover.background && (
          <Image
            alt="Banner Image"
            fill
            objectFit="cover"
            objectPosition="center"
            blurDataURL={"/images/about-photo-carousel-2.png"}
            src={cover.background}
          />
        )}
      </div>
      <div
        className={clsx(
          "cover-content",
          cover.background ? "min-w-full absolute z-10 xs:pl-4 xs:pr-4" : ""
        )}
      >
        <div
          className={clsx("mb-4 relative", titleClassName)}
          style={titleStyle}
        >
          <h1
            className={clsx(
              Visby.variable,
              "title-bold text-[22px] font-semibold xxl:text-xxl lg:text-[40px] lg:leading-[50px] md:text-[40px] md:leading-[40px] sm:text-[40px] sm:leading-[40px] xs:text-[40px] xs:leading-[40px] xl:leading-[60px] xl:text-[50px] px-1",
              "max-w-[550px]",
              titleClassName,
              theme && theme == "dark" ? "text-white" : "text-grey-dark"
            )}
            dangerouslySetInnerHTML={{ __html: cover.title }}
          />
        </div>
        {cover.description && (
          <div
            className={clsx(
              "font-normal",
              poppins.variable,
              "mb-2 max-w-[350px]",
              "xl:text-sm px-1",
              theme && theme == "dark" ? "text-white" : "text-grey-dark",
              descriptionClassName
            )}
          >
            <div
              dangerouslySetInnerHTML={{ __html: cover.description }}
              className="cover-description leading-6"
            />
          </div>
        )}
        <div
          className={clsx(
            "tools flex justify-start items-center gap-2 px-1",
            actionClassName
          )}
        >
          {actions.map((action: any, idx: number) => {
            const { children } = action;
            if (!components_types[action.name]) return null;
            if (action.name)
              return React.createElement(
                components_types[action.name],
                {
                  ...action,
                },
                children &&
                  components_types[children.name] &&
                  React.createElement(components_types[children.name], {
                    ...children,
                  })
              );
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
                      "flex justify-start items-center gap-1",
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
                      React.createElement(
                        icon_types[action.icon],
                        {
                          ...action,
                        },
                        children
                      )}
                    {action.label}
                  </span>
                )}
              </Button>
            );
          })}
        </div>
      </div>
      {cover.image && (
        <div>
          <Image height={400} width={400} src={cover.image} alt={cover.title} />
        </div>
      )}
    </Wrapper>
  );
};
export default Cover;
