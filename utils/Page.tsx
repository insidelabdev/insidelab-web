import React from "react";
/* import dynamic from "next/dynamic"; */
import { siteConfig } from "@/config/site";
import * as components from "@/components/com";
import type { ISection, TemplateType } from "@/types";
import * as layouts from "../layouts";
import Image from "next/image";
import clsx from "clsx";

const root_components = ["footer", "cover"];
export const getTemplate = () => {
  let { template } = siteConfig;
  return template;
};
export const getLayout = (page: any) => {
  const layout_types: any = {
    ...layouts,
  };
  return (
    layout_types[page.layout || "mainlayout"] || layout_types["mainlayout"]
  );
};
export const getPage = (template: TemplateType, slug: string) => {
  let { pages } = template;
  if (!pages || (pages && pages.length == 0)) return null;
  let page = pages.find((page: any) => page.slug == slug);
  return page;
};

export const getTheme = (): any => {
  let { template } = siteConfig as any;
  return template?.theme;
};
export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: any;
}) {
  let { slug } = params;
  const layout_types: any = {
    ...layouts,
  };
  let template: any = getTemplate();
  let theme: any = getTheme();
  const page: any = getPage(template, slug);
  if (!page)
    return (
      <div className="w-screen h-full flex flex-col gap-1 justify-center items-center">
        <Image
          style={{ margin: "80px 0 10px 0" }}
          src="/images/page-not-found.png"
          alt="page not found"
          width={800}
          height={800}
        />
        <h2 className="text-white text-[24px] md:text-[50px] font-bold pb-2">
          Página no encontrada
        </h2>
      </div>
    );
  console.log("Render page: ", page.slug);
  let Layout: any = getLayout(page);
  const component_types: any = {
    ...components,
  };
  const renderComponent = (components: any[]): any[] => {
    return components.map((component: any) => {
      let { name, children, ...props } = component;
      //name = typeof component_types[name] !== "undefined" ? name : "list";
      console.log("Component: ", name);
      // const Component = dynamic(() => import(`@/components/com/${name}`), {
      //   loading: () => <p>Loading...</p>,
      // });
      if (!component_types[name]) return null;
      return (
        <>
          {React.createElement(
            component_types[name],
            {
              name,
              ...props,
            },
            children
          )}
        </>
      );
    });
  };
  const renderSections = (page: any): any[] => {
    let { sections, className } = page;
    if (!sections) return [];
    return sections
      .filter(
        (section: ISection) => !root_components.includes(String(section.name))
      )
      .map((section: any, idx: number) => {
        let { components, name, children, ...props } = section;
        if (!components && name) {
          if (!component_types[name]) return null;
          return (
            <section
              key={`${section}-${idx}`}
              className={clsx("page-section", className)}
              {...props}
            >
              {component_types[name] &&
                React.createElement(
                  component_types[name],
                  {
                    name,
                    theme,
                    ...props,
                  },
                  children
                )}
            </section>
          );
        }
        if (components)
          return (
            <section className="page-section" {...props}>
              {...renderComponent(components)}
            </section>
          );
      });
  };

  return (
    <Layout theme={theme} page={page}>
      {renderSections(page)}
    </Layout>
  );
}
