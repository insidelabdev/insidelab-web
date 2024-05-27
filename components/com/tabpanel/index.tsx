"use client";
import React, { useContext, useEffect, useState } from "react";
import { Wrapper } from "./style";
import { Tabs, Tab, Card, Skeleton } from "@nextui-org/react";
/* import Image from "next/image"; */
import Image from "@/components/com/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
// import Link from "@/components/Link"
import clsx from "clsx";
import * as icons from "@/components/icons";
const TabContext = React.createContext({} as any);
const ItemTab = ({ name, ...tab }: any) => {
  const icon_types: any = {
    ...icons,
  };
  const { selected, setActiveTabs, activeTabs } = useContext(TabContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!activeTabs[name]) {
      setActiveTabs({
        ...activeTabs,
        [String(name)]: true,
      });
      setMounted(true);
    }
  }, []);
  if (!mounted && !activeTabs[name])
    return (
      <section className="container xl:px-2 lg:px-4 md:px-4 sm:px-2 xs:px-1">
        <Card
          shadow="none"
          className={clsx(
            "bg-white w-full xs:space-y-5 py-2",
            "xl:grid xl:grid-cols-2 xl:gap-1 xl:items-center",
            "lg:grid lg:grid-cols-2 lg:gap-1 lg:items-center",
            "md:grid md:grid-cols-2 md:gap-1 md:items-center",
            "sm:grid sm:grid-cols-1 sm:gap-1 sm:items-center"
          )}
          radius="lg"
        >
          <div className="space-y-2">
            <div className="pb-3">
              <Skeleton className="xs:w-4/5 xl:w-2/6 rounded-lg">
                <div className="h-4 rounded-lg bg-default-200"></div>
              </Skeleton>
            </div>
            <div className="content space-y-2">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
            <div className="pt-2">
              <Skeleton className="xs:w-9/12 xl:w-3/6  rounded-lg">
                <div className="xs:h-6  rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </div>
          <div>
            <Skeleton className="rounded-sm">
              <div className="xs:h-[300px] xl:h-[300px] rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      </section>
    );
  return (
    <section className="grid w-full xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:place-items-center xs:grid-cols-1 gap-4">
      <div>
        <section className="flex flex-col justify-center">
          <h2 className="tabpanel-title text-[22px] md:text-[35px] font-bold">
            {tab.title}
          </h2>
          <p
            dangerouslySetInnerHTML={{ __html: tab.description }}
            className="tabpanel-description mt-[24px] mb-[35px] text-[14px] leading-[16px] sm:text-[17px] sm:leading-[25px] text-justify"
          ></p>
          <div className="tools flex justify-start items-center gap-2">
            {tab.actions.map((action: any, idx: number) => (
              <Button
                key={`${action}-${idx}`}
                className={clsx(
                  "btn-action px-[32px] py-[15px]",
                  action.type || "default",
                  action.className
                )}
                color={action.type}
              >
                {action.link ? (
                  <Link href={action.link} passHref legacyBehavior>
                    <a
                      className={clsx(
                        "link text-[17px] font-semibold",
                        action.type
                      )}
                      href={action.link}
                    >
                      {action.label}
                    </a>
                  </Link>
                ) : (
                  action.label
                )}
              </Button>
            ))}
          </div>
        </section>
      </div>
      <div className="flex items-center relative">
        <div
          className="tabpanel-image drop-shadow-md xs:max-w-screen"
          style={{
            height: 300,
            minWidth: 350,
            maxWidth: "calc(100% - 8px)",
          }}
        >
          <Image
            src={tab.cover}
            fill
            alt={tab.label}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN88uR5PQAIkwMweFOllAAAAABJRU5ErkJggg=="
            }
            className="rounded-md"
          />
        </div>
        {tab?.tag?.icon && (
          <div className="tags-container absolute top-1 left-1 shadow-lg right-1 opacity-0">
            <div className="tag bg-white rounded-[10px] flex flex-start gap-1 items-center p-[10px]">
              {React.createElement(icon_types[tab.tag.icon], {
                ...tab,
              })}
              <span className="tag-label text-[11px] xs:text-[13px] sm:text-[15px] md:text-[14px] lg:text-[16px]">
                {tab?.tag?.text}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
const Tabpanel = ({
  title,
  tabs,
  theme = "light",
  className,
  description,
}: {
  title: string;
  theme: string;
  tabs: any[];
  className?: string;
  description: string;
}) => {
  const [selected, setSelected] = useState<any>("");
  const [activeTabs, setActiveTabs] = useState<any>({});
  const handleOnChage = (key: React.Key) => {
    setSelected(key);
  };
  const icon_types: any = {
    ...icons,
  };
  return (
    <TabContext.Provider
      value={{
        setSelected,
        setActiveTabs,
        activeTabs,
        selected,
      }}
    >
      <Wrapper
        theme={theme}
        className={clsx(/* "mt-[65px]", */ "tabpanel-" + theme, className)}
      >
        {title && (
          <div className="tabpanel-title flex items-center flex-col">
            <h2
              className={clsx(
                "title font-semibold text-center px-1",
                "xl:text-xl xl:leading-9 xl:max-w-[860px]",
                "lg:text-xl lg:leading-9 lg:max-w-[860px]",
                "md:text-lg md:leading-8 md:max-w-[860px]",
                "sm:text-lg sm:leading-8 sm:max-w-[860px]",
                "xs:text-xl xs:leading-9 xs:max-w-screen"
              )}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {description && (
              <p
                className="max-w-[504px] text-center text-xs leading-5 my-1"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            )}
          </div>
        )}
        <div className="tabpanel-container mt-[45px]">
          <div className="flex w-full flex-col relative">
            <Tabs
              onSelectionChange={handleOnChage}
              selectedKey={selected}
              aria-label="Options"
              color="primary"
              variant="underlined"
              classNames={{
                tabList: `gap-0 sm:gap-2 lg:gap-6 w-full relative rounded-none p-0 border-b border-divider flex md:justify-center overflow-scroll ${
                  tabs.length > 2 ? "justify-start" : "justify-evenly"
                }`,
                cursor: "w-[130%] bg-primary cursor",
                tab: " w-56 md:pl-[50px] h-12 text-[14px] sm:text-[17px]",
                tabContent:
                  "group-data-[selected=true]:font-bold group-data-[selected=true]:text-black",
              }}
            >
              {tabs.map((tab, index) => {
                let name = tab?.label?.replace(/\s+/g, "_").toLowerCase();
                return (
                  <Tab
                    key={index}
                    title={
                      <div className="flex items-center space-x-2">
                        {tab.icon && (
                          <span>
                            {React.createElement(icon_types[tab.icon])}
                          </span>
                        )}
                        {tab.label && (
                          <span className="text-md">{tab.label}</span>
                        )}
                      </div>
                    }
                    className="flex"
                  >
                    <div className="container mx-auto px-1 lg:px-6 py-2">
                      <ItemTab {...tab} name={name} />
                    </div>
                  </Tab>
                );
              })}
            </Tabs>
          </div>
        </div>
      </Wrapper>
    </TabContext.Provider>
  );
};

export default Tabpanel;
