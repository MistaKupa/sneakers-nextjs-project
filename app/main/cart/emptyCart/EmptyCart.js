import Lottie from "lottie-react";
import empty from "@/public/empty-cart";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h2 className="text-dark-500 text-3xl text-bold">Your cart is empty</h2>
      <Lottie className="h-96 my-4" animationData={empty}></Lottie>
    </div>
  );
}
