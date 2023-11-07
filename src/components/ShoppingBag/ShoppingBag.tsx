import { Dispatch, SetStateAction } from "react";
import { Product } from "@/components/Product/Product";

interface PropsShoppingBag {
  onClose: Dispatch<SetStateAction<boolean>>;
}

export function ShoppingBag({ onClose }: PropsShoppingBag) {
  return (
    <div className={"absolute top-16 w-full h-5/6 z-10 bg-white"}>
      <div>
        <text><span> 03 </span> Itens</text>
      </div>
      <div>
        <Product />
      </div>

    </div>
  );
}