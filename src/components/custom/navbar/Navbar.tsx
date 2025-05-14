"use client";

import Link from "next/link";
import { ThemeChanger } from "../themeChanger/ThemeChanger";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { menu } from "@/lib/helper/navbar";

const Navbar = () => {
  const [isSelected, setIsSelected] = useState<string | null>("خانه");

  return (
    <div className="w-full  h-[74px]  bg-pink-1 rounded-[48px] ">
      <div className="w-full flex flex-row p-2 px-[124px] items-center gap-x-[97px]">
        <div className="h-[36.5px] w-[66.2px]">
          <img src="/logo.svg" className="size-full" alt="Logo" />
        </div>
        <div
          className={`w-full flex flex-row  py-2 gap-x-3 items-center h-full text-base  `}
        >
          {menu.map((item, index) => {
            return item === "خدمات" ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger
                  className={`flex flex-row justify-center items-center py-2 px-4 gap-1 border-0 outline-0  cursor-pointer ${
                    isSelected == item
                      ? "text-orange-1 font-bold"
                      : " text-purpel-1  font-normal"
                  }`}
                >
                  {item}
                  <ChevronDownIcon size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* {dropDownItems?.map((item, index) => {
                return <DropdownMenuItem key={index}>{item}</DropdownMenuItem>;
              })} */}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={index}
                href={"/"}
                className={`flex justify-center items-center py-2 px-4 leading-[26px] ${
                  isSelected == item
                    ? "text-orange-1 font-bold"
                    : " text-purpel-1  font-normal"
                } `}
                onClick={() => setIsSelected(item)}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="hidden">
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Navbar;
