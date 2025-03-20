import Link from "next/link";
import MiniProductCard from "../../_miniProductCard/MiniProductCard";
import Button from "../../UI/Button";
import { useCart } from "@/app/_context/CartContext";
import Image from "next/image";
import CartEmpty from "./CartEmpty";

function CartPopup({ isOpen, openPopup, closePopup }) {
  const { setCheckoutProgress, cart } = useCart();

  return (
    <div
      className={`absolute top-[100%] -right-36 min-w-96 m-0 rounded-xl flex items-center pt-5 z-10 ${
        isOpen ? "block" : "hidden"
      }`}
      onMouseEnter={openPopup}
      onMouseLeave={closePopup}
    >
      <div className="flex flex-col gap-7 bg-dark-100 w-full rounded-xl shadow-2xl ">
        <div className="flex items-center border-b p-6">
          <h4 className="text-dark-500 text-lg font-bold">Cart</h4>
        </div>

        {cart.length === 0 ? (
          <div className="pb-10">
            <CartEmpty />
          </div>
        ) : (
          <>
            <MiniProductCard />

            <div className="flex items-center justify-center px-6 mb-8 w-full">
              <Link className="w-full " href="/main/cart">
                <Button
                  onClick={() => setCheckoutProgress("in-cart")}
                  type="main"
                >
                  <span className="font-bold text-lg text-newWhite">
                    Order Now
                  </span>
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPopup;
