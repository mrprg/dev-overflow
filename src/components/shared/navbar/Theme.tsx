"use client";

import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { themes } from "@/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();
  console.log("hi");

  return (
    <Menubar className=" relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className=" focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src={"/assets/icons/sun.svg"}
              width={20}
              height={20}
              className="active-theme"
              alt="sun"
            />
          ) : (
            <Image
              src={"/assets/icons/moon.svg"}
              width={20}
              height={20}
              className="active-theme"
              alt="moon"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className=" absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => (
            <MenubarItem
              className=" flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              key={item.value}
              onClick={() => {
                setMode(item.value);

                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}>
              <Image
                src={item.icon}
                width={16}
                height={16}
                alt={item.value}
                className={`${
                  mode === item.value && "active-theme"
                }`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === item.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}>
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
