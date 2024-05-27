import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface TemplateSocialsType {
  icon?: string;
  link?: string;
}

export interface ComponentActionType {
  label?: string;
  icon?: string;
  link?: string;
  className?: string;
  type?: string;
}

export interface ISection {
  className?: string;
  name?: string;
}

export interface SectionItemType {
  label?: string;
  link?: string;
  icon?: string;
}

export interface SectionType {
  title?: string;
  items?: SectionItemType[];
}

export interface ComponentItemType {
  description?: string;
  author?: string;
  profile?: string;
  picture?: string;
}

export interface TabActionType {
  label?: string;
  icon?: string;
  link?: string;
  className?: string;
  type?: string;
}

export interface ComponentTabType {
  label?: string;
  title?: string;
  cover?: string;
  icon?: string;
  tag?: string;
  description?: string;
  actions?: TabActionType[];
}

export interface TemplateComponentsType {
  name?: string;
  title?: string;
  tabs?: ComponentTabType[];
  items?: ComponentItemType[];
  actions?: ComponentActionType[];
}

export interface TemplateElementsType {
  src?: string;
}

export interface TemplateActionType {
  label?: string;
  icon?: string;
  link?: string;
  className?: string;
  type?: string;
}

export interface TemplateSectionType {
  className?: string;
  itemLayout?: string;
  name?: string;
  logo?: string;
  background?: string;
  description?: string;
  title?: string;
  socials?: TemplateSocialsType[];
  actions?: TemplateActionType[];
  elements?: TemplateElementsType[];
  components?: TemplateComponentsType[];
  sections?: SectionType[];
}

export interface TemplateType {
  layout?: string;
  name?: string;
  pages?: any[];
  sections?: TemplateSectionType[];
}

export interface LinkType {
  github?: string;
  twitter?: string;
  docs?: string;
  discord?: string;
  sponsor?: string;
}

export interface NavItem {
  label?: string;
  href?: string;
}

export interface SiteConfigType {
  name?: string;
  description?: string;
  navItems?: NavItem[];
  navMenuItem?: NavItem[];
  links?: LinkType[];
  template?: TemplateType;
}
