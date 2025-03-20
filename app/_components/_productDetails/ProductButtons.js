"use client";

import { useCart } from "@/app/_context/CartContext";
import Button from "../UI/Button";
import { useState } from "react";

function ProductButtons({ product }) {
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((prev) => prev + 1);
  }

  function decrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  return (
    <div className="grid grid-cols-[1.2fr,1fr,1fr] items-center justify-between gap-3 ">
      <div className="col-span-1 flex items-center justify-center rounded-xl w-full">
        <Button
          type="quantity"
          iconSize={20}
          className="text-newPrimary"
          increment={increment}
          decrement={decrement}
        >
          <span className="font-bold text-dark-500">{quantity}</span>
        </Button>
      </div>
      <div className="col-span-2 flex items-center justify-center w-full rounded-xl">
        <Button
          type="addToCart"
          iconSize={25}
          className="text-newWhite"
          onClick={() => addToCart(product, quantity)}
        >
          <span className="font-bold text-newWhite ">Add to cart</span>
        </Button>
      </div>
    </div>
  );
}

export default ProductButtons;
