import Image from "next/image";
import CartSteps from "./cartSteps/CartSteps";

export default function Cart() {
  return (
    <section className="mx-auto flex flex-col items-center justify-center">
      <div className="relative w-full h-32">
        <div className="absolute -z-10 w-full h-full">
          <Image
            src="/images/bg-main-desktop-horizontal.png"
            alt="Background Image"
            fill
          />
        </div>
      </div>
      <CartSteps />
    </section>
  );
}
