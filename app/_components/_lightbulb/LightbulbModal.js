"use client";

import Image from "next/image";
import { IoChevronBack, IoChevronForward, IoCloseSharp } from "react-icons/io5";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";

function LightbulbModal({
  productImages,
  setIsOpen,
  setActiveIndex,
  activeIndex,
}) {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const nextImage = () => {
    if (activeIndex === productImages.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevImage = () => {
    if (activeIndex === 0) {
      setActiveIndex(productImages.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <>
      <div
        ref={modalRef}
        className="w-[650px] fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col gap-5"
      >
        <motion.button
          whileHover={{ scale: 1.3 }}
          className="place-self-end text-newWhite hover:text-dark-300 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          <IoCloseSharp size={25} />
        </motion.button>
        {/*MAIN IMAGE CONTAINER*/}
        <div className="relative rounded-lg w-full ">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={productImages[activeIndex]}
                alt="Product photo"
                width={500}
                height={500}
                quality={80}
                className="w-full h-full rounded-lg"
              />
            </motion.div>
          </AnimatePresence>

          {/*NAVIGATION BUTTONS*/}
          <button
            onClick={prevImage}
            className="absolute top-[50%] translate-y-[-50%] -left-6 bg-dark-100 rounded-full p-3 text-dark-500 hover:text-newPrimary"
          >
            <IoChevronBack size={25} className="" />
          </button>

          <button
            onClick={nextImage}
            className="absolute top-[50%] translate-y-[-50%] -right-6 bg-dark-100 rounded-full p-3 text-dark-500 hover:text-newPrimary"
          >
            <IoChevronForward size={25} className="" />
          </button>
        </div>

        <div className="w-full items-center justify-around flex rounded-lg">
          {productImages.map((productImage, i) => (
            <div
              key={i}
              className={`w-28 flex items-center justify-center cursor-pointer rounded-lg ${
                activeIndex === i
                  ? "border-2 border-newPrimary"
                  : "border border-transparent"
              }`}
              onClick={() => setActiveIndex(i)}
            >
              <Image
                src={productImage}
                alt={`Product image ${i}`}
                width={100}
                height={100}
                className="w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LightbulbModal;
