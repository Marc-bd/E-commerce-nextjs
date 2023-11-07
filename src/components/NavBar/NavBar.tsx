"use client";
import { useState } from "react";
import { RiCloseFill, RiMenu5Fill, RiSearch2Line, RiShoppingBagLine, RiUser3Line } from "react-icons/ri";
import Menu from "@/components/Menu/Menu";
import Search from "@/components/Search/Search";
import { ShoppingBag } from "@/components/ShoppingBag/ShoppingBag";


export default function NavBar() {

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [toggleSearch, setSearch] = useState<boolean>(false);
  const [toggleShoppingBag, setShoppingBag] = useState<boolean>(false);


  return (
    <nav className={"bg-white flex flex-col gap-4 "}>
      <div className={"flex flex-row h-16 items-center p-4"}>
        {/*  Icon Container */}
        <div className={"w-2/12 md:hidden"}>
          <RiMenu5Fill
            onClick={() => setToggleMenu(!toggleMenu)}
            className={"text-2xl cursor-pointer text-orange-500 md:hidden"} />
        </div>
        {/*Logo container*/}
        <div className={"w-full text-center md:w-2/12"}>
          <h1 className={"cursor-pointer text-blue-500 hover:text-orange-500"}>
            Nice Store
          </h1>
        </div>
        {/* Menu Container*/}
        <div className={"hidden md:flex md:w-full"}>
          <Menu />
        </div>
        {/*  User Icons Container */}
        <div className={"flex flex-row w-3/12 justify-end gap-2 md:w-2/12 md:justify-around"}>
          <RiSearch2Line
            onClick={() => setSearch(true)}
            className={"hidden md:flex text-2xl cursor-pointer hover:text-orange-500"} />
          <RiShoppingBagLine
            onClick={() => setShoppingBag(!toggleShoppingBag)}
            className={"text-2xl cursor-pointer hover:text-orange-500"} />
          <RiUser3Line className={"text-2xl cursor-pointer hover:text-orange-500"} />
        </div>
        {/*  Menu mobile */}
        {
          toggleMenu && (
            <div className="absolute bg-black bg-opacity-60 top-0 left-0 w-full h-full ">
              <div className="bg-white w-4/6 h-full">
                <div className={" flex flex-row w-full justify-between p-5 items-center"}>
                  <RiCloseFill
                    onClick={() => setToggleMenu(!toggleMenu)}
                    className={"text-2xl cursor-pointer text-blue-800"} />
                </div>
                <div>
                  <Menu />
                </div>
              </div>
            </div>
          )
        }
      </div>
      <div className={"flex flex-col mb-5 items-center md:hidden"}>
        <Search placeholder={"I'm looking for..."} />
      </div>
      {/*  Search Contianer */}
      {
        toggleSearch && (
          <div className={"hidden md:flex md:absolute md:bg-black md:bg-opacity-60 md:w-full md:h-full md:items-center md:justify-center "}>
            <div className={"bg-gray-100 border-gray-400 p-5 rounded-md"}>
              <div className={"flex flex-row w-full justify-end mb-5 items-center "}>
                <RiCloseFill
                  onClick={() => setSearch(!toggleSearch)}
                  className={"text-2xl cursor-pointer text-blue-800"} />
              </div>
              <div className={"flex flex-col h-28 justify-around"}>
                <text className={"text-xl text-blue-800"}>
                  What can we help you to find?
                </text>
                <div className={"h-2/5  flex items-center"}>
                  <Search placeholder={"I'm looking for..."} />
                </div>
              </div>
            </div>
          </div>
        )
      }
      {
        toggleShoppingBag && <ShoppingBag onClose={setShoppingBag} />
      }
    </nav>
  );
}

