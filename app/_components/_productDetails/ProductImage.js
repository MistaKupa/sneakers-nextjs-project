"use client";

import { motion } from "motion/react";

import Image from "next/image";

function ProductImage({ product }) {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-7 w-[90%]">
        <motion.div layoutId={`product-${product.id}`} className="rounded-2xl">
          <Image
            src={product.images[0]}
            alt="Fall Sneakers image"
            width={720}
            height={720}
            quality={80}
            className="rounded-2xl"
          />
        </motion.div>
        <div className="flex items-center justify-between gap-10">
          {product.images.map((image, i) => (
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              key={i}
              className="rounded-2xl"
            >
              <Image
                src={image}
                alt="Fall Sneakers image"
                width={400}
                height={400}
                quality={80}
                className="rounded-2xl"
              />
            </motion.div>
          ))}
        </div>
      </div>
      {/*<LightbulbModal />*/}
    </>
  );
}

export default ProductImage;
