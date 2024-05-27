import React from "react";
import Cover from "@/components/com/cover";

const BlogLayout = async ({
  page,
  children,
}: {
  page: any;
  children: React.ReactNode;
}) => {
  return (
    <div className="layout blog-layout">
      <Cover options={page} />
      <div className="layout-content">{children}</div>
    </div>
  );
};
export default BlogLayout;
