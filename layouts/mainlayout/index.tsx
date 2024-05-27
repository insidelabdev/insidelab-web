import React from "react";
import { siteConfig } from "@/config/site";
import Cover from "@/components/com/cover";
import { getTemplate } from "@/utils/Page";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  let template: any = await getTemplate();
  return (
    <div className="layout main-layout">
      <Cover options={template} />
      <div className="layout-content">{children}</div>
    </div>
  );
};
export default MainLayout;
