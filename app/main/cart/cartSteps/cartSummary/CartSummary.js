"use client";

import Image from "next/image";
import CartDiscountInput from "./CartDiscountInput";
import CartHeader from "./CartHeader";
import CartProductCard from "./CartProductCard";
import { useCart } from "@/app/_context/CartContext";

export default function CartSummary() {
  const { setCheckoutProgress } = useCart();

  return (
    <div className=" max-w-[1440px]">
      <div className="my-7">
        <h2 className="text-3xl text-dark-500 font-bold">Your Cart</h2>
      </div>

      {/*Cart Header */}
      <CartHeader />

      {/*Cart Items */}
      <div className="grid grid-rows-[auto] gap-5 border-b-2">
        <CartProductCard />
      </div>

      {/*DISCOUNT + PROCEED CHECKOUT*/}
      <div className="grid grid-cols-2 items-center justify-between mt-8">
        <CartDiscountInput />

        {/*"BUTTON"*/}
        <div className="flex items-center justify-end">
          <button
            className="bg-newPrimary px-10 py-4 rounded-md text-newWhite font-bold"
            onClick={() => setCheckoutProgress("in-checkout")}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
