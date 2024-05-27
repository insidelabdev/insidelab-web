import { Wrapper } from "./styles";
import Image from "@/components/com/image";
import { Button } from "@nextui-org/button";
import  Link  from "next/link";
// import Link from "@/components/Link"
import clsx from "clsx";

const ListItem = ({
  title,
  description,
  cover,
  logo,
  size,
  theme = "light",
  actions,
  center,
}: {
  title: string;
  description: string;
  cover: string;
  theme: string;
  actions: any;
  logo: any;
  center: boolean;
}) => {
  return (
    <Wrapper theme={theme} className={clsx("mt-[65px]", "list-item-" + theme)}>
      <section className="container flex flex-col md:flex-row md:gap-4 w-screen gap-4 pt-4">
        <section className="md:w-1/2 flex flex-col justify-center items-start lg:pl-[164px]">
          {logo && (
            <div
              className="relative mx-4"
              style={{
                height: logo.height || 100,
                width: logo.width || 100,
              }}
            >
              <Image
                objectFit="contain"
                src={logo.src}
                alt={logo.label}
                fill
                className="self-center"
              />
            </div>
          )}
          <div className="flex flex-col gap-[12px] p-2">
            {title && (
              <h2
                className="title text-xxl spots-cover-title mb-2"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {description && (
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className="text-justify"
              ></p>
            )}
            {actions && (
              <div className="mt-2">
                {actions.map((action: any, idx: number) => (
                  <Button
                    key={`${action}-${idx}`}
                    className={clsx(
                      "btn-action px-[32px] lg:px-[24px] first-line:py-[15px] w-fit",
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
            )}
          </div>
        </section>
        <div
          className={clsx(
            "md:w-1/2 flex px-2 md:p-2",
            center ? "justify-start" : "justify-center lg:justify-start"
          )}
        >
          <div
            className="relative mb-4 rounded-sm drop-shadow-md"
            style={{
              height: size || 400,
              width: size || 400,
            }}
          >
            <Image
              objectFit="cover"
              src={cover}
              fill
              alt="cover-image-alt"
              className="rounded-sm m-0 p-0 overflow-hidden"
            />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default ListItem;
