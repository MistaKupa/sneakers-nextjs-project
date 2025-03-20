"use client";

import ProductButtons from "./ProductButtons";
import ProductPrice from "./ProductPrice";
import { motion } from "motion/react";

function ProductDescription({ product }) {
  const { id, title, description, price, discount, details } = product;

  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.3 }}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-4 ">
          <h3 className="font-semibold text-dark-400 tracking-wider">
            SNEAKER COMPANY
          </h3>
          <h1 className="font-bold text-5xl text-dark-500">{title}</h1>
        </div>
        <div className="flex flex-col justify-between gap-8 max-w-[500px]">
          <div className="flex items-center justify-center">
            <p className=" text-dark-400">{description}</p>
          </div>
          <ProductPrice price={price} discount={discount} />
        </div>
        <ProductButtons product={product} />
      </motion.div>
    </div>
  );
}

export default ProductDescription;
