"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { delay } from "motion";

export default function PictureInput() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="imageForm"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "330px", opacity: 1 }}
            exit={{ opacity: 0, width: 0 }}
          >
            <form className="flex">
              <input
                type="file"
                className="w-full h-full bg-dark-200 border border-dark-300 text-sm font-medium rounded-md"
              ></input>
            </form>
            <div>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-sm text-newPrimary font-medium"
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="showFormButton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="h-14"
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sm text-newPrimary font-medium"
            >
              Update
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
