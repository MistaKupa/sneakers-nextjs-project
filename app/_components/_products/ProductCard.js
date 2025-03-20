"use client";

import Image from "next/image";
import Link from "next/link";
import PriceDetails from "./PriceDetails";
import { motion } from "motion/react";

function ProductCard({ product }) {
  const discountedPrice = product.price * (product.discount / 100);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      key={product.id}
      className="flex flex-col justify-center gap-5 row-start-2 rounded-lg w-full h-full"
    >
      <motion.div
        layoutId={`product-${product.id}`}
        className="w-full h-[350px] border-2 rounded-lg border-transparent hover:border-newPrimary  transition-all duration-300 overflow-hidden"
      >
        <Link href={`/main/product/${product.id}`}>
          <Image
            src={product.images[0]}
            alt="Product photo"
            width={500}
            height={500}
            className="rounded-lg w-full h-full hover:scale-[115%] transition-all duration-300"
          />
        </Link>
      </motion.div>

      <div className="flex flex-col justify-center gap-2 px-3">
        <div className="flex items-center">
          <h4 className="text-dark-500 font-bold">{product.title}</h4>
        </div>

        <PriceDetails
          price={product.price}
          discountedPrice={discountedPrice}
          discount={product.discount}
        />
      </div>
    </motion.div>
  );
}

export default ProductCard;
