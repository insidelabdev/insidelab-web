import { Wrapper } from "./style";
import { Divider } from "@nextui-org/react";
import Image from "@/components/com/image";
import * as icons from "@/components/icons";
import React from "react";
import Link from "next/link";
import clsx from "clsx";

const Footer = ({ template }: { template: any }) => {
  const icon_types: any = {
    ...icons,
  };
  let { sections } = template;
  let footer = sections?.find((item: any) => item.name == "footer");
  if (!footer) return <span className="text-white">No hay footer</span>;
  let { socials, logo } = footer;

  return (
    <Wrapper>
      <footer className="w-full px-[18px] xl:py-[60px] xs:py-[40px]">
        <div
          className={clsx(
            "grid",
            "logo-container",
            "xl:grid xl:grid-cols-2",
            "lg:grid lg:grid-cols-2",
            "md:grid md:grid-cols-2",
            "sm:grid sm:grid-cols-1",
            "xs:grid xs:grid-cols-1"
            /* "lg:justify-start lg:items-center lg:gap-4",
            "md:justify-start md:items-center md:gap-4",
            "sm:justify-start sm:items-center sm:gap-2",
            "xs:justify-start xs:items-center xs:gap-2 xs:flex-col", */
          )}
        >
          <div
            className={clsx(
              "xl:flex xl:justify-start xl:items-start xl:flex-col xl:gap-4",
              "lg:flex lg:justify-start lg:items-start lg:flex-col lg:gap-4",
              "md:flex md:justify-start md:items-start md:flex-col md:gap-4",
              "sm:flex sm:justify-start sm:items-start sm:flex-col md:gap-4",
              "xs:flex xs:justify-start xs:items-center xs:gap-4 py-2"
            )}
          >
            <div>
<<<<<<< HEAD
              <Link href="/" passHref legacyBehavior>
                <a>
                  <Image
                    src={footer.logo}
                    alt="footer logo"
                    width={150}
                    height={150}
                    objectFit="cover"
                    fill
                    className="footer-logo"
                  />
                </a>
=======
              <Link href="/">
                <Image
                  src={footer.logo}
                  alt="footer logo"
                  width={150}
                  height={150}
                  objectFit="cover"
                  fill
                  className="footer-logo"
                />
>>>>>>> 1cbdeeedb5c4a6bb2cff5309c9ea5ff0fa3bf542
              </Link>
            </div>
            <div>
              <div className="flex xl:gap-2 lg:gap-2 md:gap-2 sm:gap-2 gap-1 justify-start items-center">
                {socials.map((social: any, index: number) => {
                  const { children } = social;
                  return (
                    <Link
                      key={`${social.icon}-${index}`}
                      href={social.link}
                      target="_blank"
                      passHref
                      legacyBehavior
                    >
                      <a className="flex justify-center items-center bg-[#1E1E1E] h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] text-white rounded-[50%]">
                        {React.createElement(
                          icon_types[social.icon],
                          {
                            ...social,
                          },
                          children
                        )}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div
            className={clsx(
              "xl:col-span-1",
              "lg:col-span-1",
              "md:col-span-1",
              "sm:col-span-2",
              "xs:col-span-2"
            )}
          >
            <div
              className={clsx(
                "grid grid-cols-2 gap-4",
                "xl:grid-cols-3",
                "lg:grid-cols-3",
                "md:grid-cols-3",
                "sm:grid-cols-3"
              )}
            >
              {footer.sections.map(
                (section: any, index: number, array: any[]) => {
                  return (
                    <div
                      key={`${section.title}-${index}`}
                      className={clsx(
                        index == array.length - 1
                          ? "col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1"
                          : ""
                      )}
                    >
                      <h3 className="font-bold text-[17px] font-weight-bold mb-1">
                        {section.title}
                      </h3>
                      <div className="flex flex-col gap-1">
                        {section.items.map((item: any, index: number) => {
                          const { children } = item;
                          return item.link ? (
                            <div key={`${item.label}-${index}`}>
<<<<<<< HEAD
                              <Link href={item.link} passHref legacyBehavior>
                                <a className="flex items-center gap-2">
                                  {item.icon && (
                                    <span className="flex justify-center items-center gap-2 h-[30px] w-[30px] text-white p-[4px]">
                                      {React.createElement(
                                        icon_types[item.icon],
                                        {
                                          ...item,
                                        },
                                        children
                                      )}
                                    </span>
                                  )}
                                  <p className="text-[14px] text-background text-xs font-medium hover:font-normal">
                                    {item.label}
                                  </p>
                                </a>
=======
                              <Link
                                href={item.link}
                                className="flex items-center gap-2"
                              >
                                {item.icon && (
                                  <span className="flex justify-center items-center gap-2 h-[30px] w-[30px] text-white p-[4px]">
                                    {React.createElement(
                                      icon_types[item.icon],
                                      {
                                        ...item,
                                      },
                                      children
                                    )}
                                  </span>
                                )}
                                <p
                                  className="text-[14px] text-background text-xs font-medium hover:font-normal"
                                  dangerouslySetInnerHTML={{
                                    __html: item.label,
                                  }}
                                ></p>
>>>>>>> 1cbdeeedb5c4a6bb2cff5309c9ea5ff0fa3bf542
                              </Link>
                            </div>
                          ) : (
                            <div key={`${item.label}-${index}`}>
                              <div className="flex items-center tems-center gap-2">
                                {item.icon && (
                                  <span className="flex justify-center items-center gap-2 h-[30px] w-[30px] text-white p-[4px]">
                                    {React.createElement(
                                      icon_types[item.icon],
                                      {
                                        ...item,
                                      },
                                      children
                                    )}
                                  </span>
                                )}
                                <p
                                  className="text-[14px] text-background text-xs font-medium"
                                  dangerouslySetInnerHTML={{
                                    __html: item.label,
                                  }}
                                ></p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
        <Divider className="mt-2 col-span-2 mb-4" />
        <p className="text-[14px] leading-[18px] font-medium text-background col-span-2 max-w-[270px] sm:max-w-full pb-2">
          <span>Inside Lab &copy; 2023. Diseñado por </span>{" "}
          <Link
            href="https://donec.com.co"
            target="_blank"
            passHref
            legacyBehavior
          >
            <a className="text-background">
              <strong>Donec Digital Factory</strong>
            </a>
          </Link>
        </p>
      </footer>
    </Wrapper>
  );
};

export default Footer;
