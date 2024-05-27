import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/com/footer";
import { siteConfig } from "@/config/site";
import Cover from "@/components/com/cover";
export const getTemplate = async () => {
  return new Promise((resolve, reject) => {
    try {
      let { template } = siteConfig;
      resolve(template);
    } catch (err) {
      reject(err);
    }
  });
};
const Layout = async ({
  children,
  page,
}: {
  children: React.ReactNode;
  page: any;
}) => {
  let template: any = await getTemplate();
  return <div className="relative flex flex-col h-screen">{children}</div>;
};
export default Layout;
