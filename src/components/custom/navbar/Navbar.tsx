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

const enum NavbarItems {
  Home = 1,
  Services,
  About_avesta,
  Truck_recall,
  Job_opportunities,
  Digital_archive,
  Contact_us,
}

const Navbar = () => {
  const [isSelected, setIsSelected] = useState<number | null>(1);

  return (
    <div className="w-full  h-[74px]  bg-pink-1 rounded-[48px] ">
      <div className="w-full flex flex-row p-2 px-[124px] items-center gap-x-[97px]">
        <div className="h-[36.5px] w-[66.2px]">
          <img src="/logo.svg" className="size-full" alt="Logo" />
        </div>
        <div
          className={`w-full flex flex-row  py-2 gap-x-3 items-center h-full text-base  `}
        >
          <Link
            href={"/"}
            className={`flex justify-center items-center py-2 px-4 leading-[26px] ${
              isSelected == NavbarItems.Home
                ? "text-orange-1 font-bold"
                : " text-purpel-1  font-normal"
            } `}
            onClick={() => setIsSelected(NavbarItems.Home)}
          >
            صفحه اصلی
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex flex-row justify-center items-center py-2 px-4 gap-1 border-0 outline-0  ${
                isSelected == NavbarItems.Services
                  ? "text-orange-1 font-bold"
                  : " text-purpel-1  font-normal"
              }`}
            >
              خدمات <ChevronDownIcon size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* {dropDownItems?.map((item, index) => {
                return <DropdownMenuItem key={index}>{item}</DropdownMenuItem>;
              })} */}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href={"/#"}
            className={`flex justify-center items-center py-2 px-[13px]  leading-[26px]  ${
              isSelected == NavbarItems.About_avesta
                ? "text-orange-1 font-bold"
                : " text-purpel-1 font-normal"
            }`}
            onClick={() => setIsSelected(NavbarItems.About_avesta)}
          >
            درباره اوستا
          </Link>
          <Link
            href={"/#"}
            className={`flex justify-center items-center py-2 px-[13px]  leading-[26px]  ${
              isSelected == NavbarItems.Truck_recall
                ? "text-orange-1 font-bold"
                : " text-purpel-1  font-normal"
            }`}
            onClick={() => setIsSelected(NavbarItems.Truck_recall)}
          >
            فراخوان کامیون‌ها
          </Link>
          <Link
            href={"/#"}
            className={`flex justify-center items-center py-2 px-[13px]  leading-[26px]  ${
              isSelected == NavbarItems.Job_opportunities
                ? "text-orange-1 font-bold"
                : " text-purpel-1  font-normal"
            }`}
            onClick={() => setIsSelected(NavbarItems.Job_opportunities)}
          >
            فرصت‌های شغلی
          </Link>
          <Link
            href={"/#"}
            className={`flex justify-center items-center py-2 px-[13px]  leading-[26px]  ${
              isSelected == NavbarItems.Digital_archive
                ? "text-orange-1 font-bold"
                : " text-purpel-1  font-normal"
            }`}
            onClick={() => setIsSelected(NavbarItems.Digital_archive)}
          >
            آرشیو دیجیتال
          </Link>
          <Link
            href={"/#"}
            className={`flex justify-center items-center py-2 px-[13px] leading-[26px]  ${
              isSelected == NavbarItems.Contact_us
                ? "text-orange-1 font-bold"
                : " text-purpel-1  font-normal"
            }`}
            onClick={() => setIsSelected(NavbarItems.Contact_us)}
          >
            ارتباط با ما
          </Link>
        </div>
      </div>

      <div className="hidden">
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Navbar;
