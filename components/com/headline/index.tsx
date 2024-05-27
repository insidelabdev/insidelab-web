"use client";

import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import * as components from "@/components/com";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";

const HeadLine = ({
  description,
  theme,
  titleClassName,
  className,
  layoutItem = "vertical",
  ...props
}: any) => {
  const [content, setContent] = useState<any>({});
  const [children, setChildren] = useState<any>(null);
  const [title, setTitle] = useState<string | null | unknown>(null);
  const searchParams = useSearchParams();
  const query_title = searchParams.get("title");
  const components_types: any = {
    ...components,
  };
  useEffect(() => {
    const { content } = props;
    if (content) {
      let { children, ...rest } = content;
      setContent(rest);
      setChildren(children);
    }
  }, [props.content]);
  useEffect(() => {
    setTitle(query_title || props.title);
  }, [query_title, props.title]);

  return (
    <Wrapper className={className}>
      <section className={clsx("headline", className)}>
        <div
          className={clsx(
            "headline-title max-w-[280px]",
            layoutItem == "vertical" ? "flex flex-col " : "flex flex-row ",
            titleClassName
          )}
        >
          {title && (
            <h1
              dangerouslySetInnerHTML={{ __html: title }}
              className={clsx(
                "text-[30px] font-bold leading-[30px]",
                theme === "dark" ? "text-white" : "text-text-color-black-light"
              )}
            />
          )}
          {description && (
            <article
              dangerouslySetInnerHTML={{ __html: description }}
              className={clsx("text-[17px] font-semibold", theme === "dark" ? "text-white" : "text-black")}
            />
          )}
        </div>
        {content && (
          <div className={clsx("headline-content", content.className)}>
            {components_types[content.name] &&
              React.createElement(
                components_types[content.name],
                {
                  ...content,
                },
                children &&
                  components_types[children.name] &&
                  React.createElement(components_types[children.name], {
                    ...children,
                  })
              )}
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default HeadLine;
