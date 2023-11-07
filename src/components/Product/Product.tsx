"use client";
import Imagem from "../../../public/assets/icons/logo.svg";
import Image from "next/image";

export function Product() {
  return (
    <div className={"flex flex-row bg-gray-100 m-5 -sm p-4 shadow-md"}>
      <div className={"w-2/5 items-center flex justify-center p-8 "}>
        <Image src={Imagem}
               alt={"product"} />
      </div>
      <div className={"w-3/5 flex flex-col justify-between items-center"}>
        <text>
          Titulo
        </text>
        <text>
          Price: R$ <span> 25.00 </span>
        </text>
        <div className={"flex gap-5 items-center border-solid border-b-2 border-black w-5/6  justify-center"}>
          <span className={"text-3xl cursor-pointer"}>-</span>
          <span className={"text-xl"}>1</span>
          <span className={"text-3xl cursor-pointer"}>+</span>
        </div>
      </div>
    </div>
  );
}