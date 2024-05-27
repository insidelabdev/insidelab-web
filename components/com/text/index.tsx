import React from "react";
const text_types: any = {
  span: ({ children, text, ...props }: any) => (
    <span dangerouslySetInnerHTML={{ __html: text }} {...props}>
      {children}
    </span>
  ),
  p: ({ children, text, ...props }: any) => (
    <p dangerouslySetInnerHTML={{ __html: text }} {...props}>
      {children}
    </p>
  ),
  article: ({ children, text, ...props }: any) => (
    <article dangerouslySetInnerHTML={{ __html: text }} {...props}>
      {children}
    </article>
  ),
  h1: ({ children, text, ...props }: any) => (
    <h1 dangerouslySetInnerHTML={{ __html: text }} {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, text, ...props }: any) => (
    <h2 dangerouslySetInnerHTML={{ __html: text }} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, text, ...props }: any) => (
    <h3 dangerouslySetInnerHTML={{ __html: text }} {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, text, ...props }: any) => (
    <h4 dangerouslySetInnerHTML={{ __html: text }} {...props}>
      {children}
    </h4>
  ),
};
const TextComponent = ({
  type = "span",
  children,
  name,
  ...props
}: {
  name: string;
  type: string;
  children: any;
}) => {
  return React.createElement(text_types[type], { ...props }, children);
};
export default TextComponent;
