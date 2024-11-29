import React from "react";
import logo from "../photo/logo.svg";
import MobileLogo from "../photo/mobile-logo.svg";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <DekstopSidebar></DekstopSidebar>
      <MobileSidebar></MobileSidebar>
    </>
  );
};

export default Sidebar;
const DekstopSidebar = () => {
  return (
    <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block">
      <div className="flex flex-col gap=20 sticky top 10 left-0">
        <div className="w-full flex flex-col gap-4">
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="logo" className="hidden md:block" />
          </Link>
          <Link to={"/"}>
            <img src={MobileLogo} alt="logo" className="block md:hidden" />
          </Link>
          <ul className="flex flex-col items-center md:items-center gap-8">
            <Link
              to={"/"}
              className="flex justify-center items-center transition-all duration-200 hover:text-sky-400"
            >
              <IoMdHome size={"30"} />
              <span className="font-bold hidden md:block">Home</span>
            </Link>
            <Link
              to={"/favourite"}
              className="flex justify-center items-center gap-1 transition-all duration-200 hover:text-sky-400"
            >
              <FaHeart size={"24"} />
              <span className="font-bold hidden md:block">Favourite</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden">
      <Link to={"/"}>
        <IoMdHome size={"30"} />
      </Link>
      <Link to={"/favourite"}>       
        <FaHeart size={"24"} />
      </Link>
    </div>
  );
};
