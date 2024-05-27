import React from "react";
import clsx from "clsx";
import Link from "next/link";
import * as icons from "@/components/icons";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
// import Image from "next/image";
import Image from "@/components/com/image";
import { Button } from "@nextui-org/button";

const CardItem = ({ title, cover, location, actions }: any) => {
  const icon_types: any = {
    ...icons,
  };
  return (
    <Card className="pb-4 min-w-md max-w-[400px]">
      <CardHeader className="flex-col items-start w-full h-[200px] p-0 overflow-hidden">
        <Image
          alt={title}
          className="card-image"
          src={cover}
          objectFit="cover"
          width={400}
          height={250}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <h4 className="font-bold text-large pb-1">{title}</h4>
        <div className="flex flex-col gap-1 pb-1 ">
          {location.map((item: any, index: number) => {
            const { children } = item;
            return (
              <p key={`${item.label}-${index}`} className="flex gap-1">
                <span>
                  {React.createElement(
                    icon_types[item.icon],
                    {
                      ...item,
                    },
                    children
                  )}
                </span>
                {item.label}
              </p>
            );
          })}
        </div>
        <div className="mt-1">
          {actions.map((action: any, idx: number) => (
            <Button
              key={`${action}-${idx}`}
              className={clsx(
                "btn-action px-[32px] py-[17px] w-5/12",
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
      </CardBody>
    </Card>
  );
};

export default CardItem;
