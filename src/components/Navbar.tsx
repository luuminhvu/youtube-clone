import React from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { BsYoutube, BsBell } from "react-icons/bs";
import { TiMicrophone } from "react-icons/ti";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 h-[56px] bg-[#212121] opacity-95 sticky top-0 z-50 ">
      <div className="flex gap-8 items-center text-2xl">
        <div className="">
          <AiOutlineMenu />
        </div>
        <Link to="/">
          <div className="flex items-center gap-2 justify-center">
            <BsYoutube className="text-2xl text-[#FF0000]" />
            <span className="text-xl font-medium text-white">Youtube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form action="">
          <div className="flex rounded-3xl bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 item-center pr-5">
              <input
                className="bg-zinc-900 text-white w-96 focus:outline-none border-none"
                type="text"
                placeholder="Tìm kiếm"
              />
              <AiOutlineClose className="text-2xl cursor-pointer text-white" />
            </div>
            <button
              type="submit"
              className=" rounded-tr-3xl rounded-br-3xl  h-10 w-16 flex items-center justify-center bg-zinc-900 text-white"
            >
              <AiOutlineSearch className="text-xl justify-center items-center text-white" />
            </button>
          </div>
        </form>
        <div className="rounded-full text-xl p-3 bg-zinc-900">
          <TiMicrophone className="text-white" />
        </div>
      </div>
      <div className="flex gap-5 items-center text-2xl">
        <AiOutlineVideoCameraAdd className="text-white" />
        <div className="relative">
          <BsBell className=" text-white" />
          <div className="absolute bottom-2 left-2 bg-red-600 rounded-full px-1 text-xs">
            9
          </div>
        </div>
        <img
          src="https://picsum.photos/200"
          alt="logo"
          className="rounded-full h-9 w-9"
        />
      </div>
    </div>
  );
};

export default Navbar;
