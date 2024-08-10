import { Wrapper } from "./style";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import * as icons from "@/components/icons";
import React from "react";
import Link from "next/link";
import clsx from "clsx";

// Define interfaces for better TypeScript support
interface Social {
  icon: string;
  link: string;
}

interface SectionItem {
  label: string;
  link?: string;
  icon?: string;
}

interface Section {
  title: string;
  items: SectionItem[];
}

interface FooterData {
  name: string;
  socials: Social[];
  logo: string;
  sections: Section[];
}

interface FooterProps {
  template: { sections?: FooterData[] };
}

const Footer: React.FC<FooterProps> = ({ template }) => {
  const iconTypes: { [key: string]: React.ComponentType<any> } = icons;
  const footer = template.sections?.find((item) => item.name === "footer");

  if (!footer) return <span className="text-white">No hay footer</span>;

  const { socials, logo, sections } = footer;

  return (
    <Wrapper>
      <footer className="w-full px-[18px] xl:py-[60px] xs:py-[40px]">
        <div
          className={clsx(
            "grid",
            "logo-container",
            "xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1"
          )}
        >
          <div
            className={clsx(
              "flex flex-col gap-4",
              "xl:justify-start xl:items-start",
              "lg:justify-start lg:items-start",
              "md:justify-start md:items-start",
              "sm:justify-start sm:items-start",
              "xs:justify-start xs:items-center py-2"
            )}
          >
            <Link href="/" passHref>
              <Image
                src={logo}
                alt="Logo del footer"
                width={150}
                height={150}
                objectFit="cover"
                className="footer-logo"
              />
            </Link>
            <div className="flex gap-1 justify-start items-center">
              {socials.map((social, index) => {
                const IconComponent = iconTypes[social.icon];
                return (
                  <Link
                    key={social.link}  // Use the link as the key for uniqueness
                    href={social.link}
                    target="_blank"
                    passHref
                  >
                    <div className="flex justify-center items-center bg-[#1E1E1E] h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] text-white rounded-full">
                      {IconComponent && <IconComponent />}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div
            className={clsx(
              "grid gap-4",
              "xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3"
            )}
          >
            {sections.map((section, index, array) => (
              <div
                key={section.title}  // Use the section title as the key for uniqueness
                className={clsx(
                  index === array.length - 1
                    ? "col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1"
                    : ""
                )}
              >
                <h3 className="font-bold text-[17px] mb-1">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {section.items.map((item, itemIndex) => (
                    <div key={item.link || item.label + itemIndex}>  {/* Unique key for each item */}
                      {item.link ? (
                        <Link href={item.link} passHref>
                          <div className="flex items-center gap-2">
                            {item.icon && (
                              <span className="flex items-center gap-2 h-[30px] w-[30px] text-white p-[4px]">
                                {React.createElement(iconTypes[item.icon])}
                              </span>
                            )}
                            <p className="text-[14px] text-background text-xs font-medium hover:font-normal">
                              {item.label}
                            </p>
                          </div>
                        </Link>
                      ) : (
                        <div className="flex items-center gap-2">
                          {item.icon && (
                            <span className="flex items-center gap-2 h-[30px] w-[30px] text-white p-[4px]">
                              {React.createElement(iconTypes[item.icon])}
                            </span>
                          )}
                          <p
                            className="text-[14px] text-background text-xs font-medium"
                            dangerouslySetInnerHTML={{ __html: item.label }}
                          ></p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Divider className="mt-2 col-span-2 mb-4" />
        <p className="text-[14px] leading-[18px] font-medium text-background col-span-2 max-w-[270px] sm:max-w-full pb-2">
          <span>Inside Lab &copy; 2023. Diseñado por </span>
          <Link href="https://donec.com.co" passHref>
            <span className="text-background">
              <strong>Donec Digital Factory</strong>
            </span>
          </Link>
        </p>
      </footer>
    </Wrapper>
  );
};

export default Footer;
