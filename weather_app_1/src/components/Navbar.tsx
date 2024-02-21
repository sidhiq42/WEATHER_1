import React from "react";
import { MdSunny } from "react-icons/md";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Searchbox from "./Searchbox";
type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 ">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <p className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <MdSunny className="text-3xl mt-1 text-yellow-300" />
        </p>
        <section className="flex gap-2 items-center ">
          <MdOutlineMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <FaLocationDot className="text-3xl" />
          <p className="text-slate-900/80 text-sm">India</p>
          <div>
            <Searchbox />
          </div>
        </section>
      </div>
    </nav>
  );
}
