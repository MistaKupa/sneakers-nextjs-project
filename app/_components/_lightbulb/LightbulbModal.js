import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function LightbulbModal() {
  return (
    <>
      <div className="fixed inset-0 z-5 bg-lightBox opacity-60"></div>

      <div className="w-[42%] absolute z-10 top-[-10%] left-[50%] translate-x-[-50%]">
        <div className="relative">
          <div>
            <Image
              src="/images/image-product-1.jpg"
              alt="Product photo"
              width={500}
              height={500}
              quality={80}
              className="w-full h-full"
            />
          </div>

          <button className="absolute top-[50%] translate-y-[-50%] -left-6 bg-dark-100 rounded-full p-3">
            <IoChevronBack size={25} className="text-dark-500" />
          </button>

          <button className="absolute top-[50%] translate-y-[-50%] -right-6 bg-dark-100 rounded-full p-3">
            <IoChevronForward size={25} className="text-dark-500" />
          </button>
        </div>
      </div>
    </>
  );
}

export default LightbulbModal;
