"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import clsx from "clsx";

import { CalendarIcon, MenuIcon } from "@/components/icons";
// import Image from "next/image";
import Image from "@/components/com/image";

import * as icons from "@/components/icons";

export const Navbar = ({ options }: { options: any }) => {
  const { navMenu, navItems } = siteConfig;
  const icon_types: any = {
    ...icons,
  };

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const pathnames = usePathname();
  const pathname = `/${pathnames.split("/")[1]}`;

  useEffect(() => {
    if (pathname === "/inside-talks" || pathname === "/inside-business") {
      setSelectedItem("/services");
    } else {
      setSelectedItem(pathname);
    }
  }, [pathnames]);

  return (
    <NextUINavbar
      className="navbar bg-white flex items-center justify-between py-[6px] fixed z-[999] transition-all"
      maxWidth="xl"
      classNames={{
        item: ["data-[active=true]:text-primary"],
      }}
      isMenuOpen={isMenuMobileOpen}
      onMenuOpenChange={setIsMenuMobileOpen}
      /* shouldHideOnScroll */
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1 h-[64px]"
            href="/"
            passHref={true}
            legacyBehavior
          >
            <a
              href="/"
              onClick={() => (setSelectedItem("/"), setIsMenuMobileOpen(false))}
            >
              <Image
                src="/images/logo.png"
                height={40}
                width={220}
                objectFit="contain"
                objectPosition="center"
                alt="logo"
                className="main-logo-desktop"
              />
            </a>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="justify-end lg:justify-start pr-4">
        <NavbarItem>
          <ul className="hidden md:flex gap-4 justify-start">
            {navItems.map((item) =>
              !item.children ? (
                <NavbarItem key={item.href}>
                  <Link href={item.href} passHref={true} legacyBehavior>
                    <a
                      className={clsx(
                        selectedItem === item.href && "text-primary",
                        "font-semibold"
                      )}
                      onClick={() => setSelectedItem(item.href)}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </Link>
                </NavbarItem>
              ) : (
                <NavbarItem key={item.href}>
                  <Dropdown closeOnSelect>
                    <DropdownTrigger className="outline-none border-0">
                      <div
                        className={clsx(
                          "flex font-semibold hover:cursor-pointer",
                          selectedItem === item.href && "text-[#B3C445]"
                        )}
                      >
                        {item.label}
                        <span>
                          {React.createElement(icon_types[item.icon], {
                            ...item,
                          })}
                        </span>
                      </div>
                    </DropdownTrigger>
                    <DropdownMenu
                      className={clsx("max-w-[200px] justify-end gap-[6px]")}
                      itemClasses={{
                        base: "gap-4",
                      }}
                    >
                      {item.children.map((it) => (
                        <DropdownItem
                          key={it.title}
                          href={it.href}
                          className="font-bold"
                          onClick={() => setSelectedItem(item.href)}
                        >
                          <span>{it.title}</span>
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                </NavbarItem>
              )
            )}
          </ul>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 md:basis-full mr-[17px] sm:mr-[48px]"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            className={clsx(
              "btn-primary text-xs py-[24px] px-[12px] bg-primary",
              "xs:text-sm xs:py-4"
            )}
            href="/reserve?calendly_url=insidelabcoworking/asesoria-espacios-1"
            startContent={<CalendarIcon className="text-danger" />}
            variant="flat"
          >
            Agendar Asesoría
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle
          aria-label={!isMenuMobileOpen ? "close-menu" : "open-menu"}
          className="md:hidden"
          icon={<MenuIcon size={40} />}
        />
      </NavbarContent>

      <NavbarMenu className="bg-primary grid place-items-center z-[999]">
        <div className="mx-4 mt-2 flex flex-col justify-start gap-2 w-full h-full">
          <div
            className="flex justify-center"
            onClick={() => setIsMenuMobileOpen(false)}
          >
            {React.createElement(icon_types[navMenu.closeIcon])}
          </div>
          <Link
            className="flex justify-center"
            href="/"
            passHref={true}
            legacyBehavior
          >
<<<<<<< HEAD
            <a
              href="/"
              onClick={() => (setIsMenuMobileOpen(false), setSelectedItem("/"))}
            >
              <Image
                src={navMenu.cover}
                alt="navmenu cover"
                objectFit="cover"
                fill
                width={140}
                height={120}
                className="main-logo-mobile"
              />
            </a>
=======
            <Image
              src={navMenu.cover}
              alt="navmenu cover"
              objectFit="cover"
              fill
              width={140}
              height={140}
              className="main-logo-mobile"
            />
>>>>>>> 1cbdeeedb5c4a6bb2cff5309c9ea5ff0fa3bf542
          </Link>
          {navMenu.items.map((item: any, index: number) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              {!item.children ? (
                <Link href={item.href} size="lg" passHref={true} legacyBehavior>
                  <a
                    href={item.href}
                    className="text-black font-bold text-[24px] flex justify-between"
                    onClick={() => setIsMenuMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ) : (
                <div
                  className="text-black font-bold text-[24px] justify-between hover:cursor-pointer flex flex-col gap-1"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex w-full justify-between">
                    {item.label}
                    <span className={isDropdownOpen ? " " : "-rotate-90"}>
                      {React.createElement(icon_types["chevrondownicon"])}
                    </span>
                  </div>
                  {isDropdownOpen && (
                    <div className="flex flex-col gap-2">
                      {item.children.map((link: any, index: number) => (
                        <Link
                          href={link.href}
                          key={`${link.label}-${index}`}
                          passHref={true}
                          legacyBehavior
                        >
                          <a
                            href={link.href}
                            className="text-black font-semibold text-[20px] pl-3"
                            onClick={() => (
                              setSelectedItem("/services"),
                              setIsMenuMobileOpen(false)
                            )}
                          >
                            {link.label}
                          </a>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
