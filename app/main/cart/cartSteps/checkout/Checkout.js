"use client";

import Payment from "@/app/_components/_payment/Payment";
import { motion } from "motion/react";
import "simplebar-react/dist/simplebar.min.css";
import CheckoutSummary from "./CheckoutSummary";

export default function Checkout() {
  return (
    <div
      className="w-[1440px] my-10 grid grid-cols-2 justify-center items-center"
      key="checkoutWrapper"
    >
      <CheckoutSummary />

      <motion.div
        key="paymentForm"
        animate={{ opacity: 1, scaleY: 1 }}
        initial={{ opacity: 0, scaleY: 0 }}
        transition={{ delay: 0.35, duration: 0.35 }}
        exit={{ opacity: 0, y: 500 }}
        className="flex items-center justify-center w-full h-full"
      >
        <Payment />
      </motion.div>
    </div>
  );
}
