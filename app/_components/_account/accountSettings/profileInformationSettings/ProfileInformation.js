"use client";

import { motion, AnimatePresence } from "motion/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import ProfileInformationForm from "./ProfileInformationForm";

export default function ProfileInformation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={`w-full h-14 flex items-center justify-between px-5 bg-dark-200 border border-dark-300 ${
          isOpen ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <h3 className="text-dark-500 text-xl font-medium">
          Profile information
        </h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-medium text-sm text-newPrimary"
        >
          Update
        </button>
      </div>

      {isOpen ? (
        <AnimatePresence>
          <motion.div
            key="profileInfoForm"
            className="w-full h-[400px] flex flex-col justify-center gap-5 items-center bg-dark-200 border-x border-b border-dark-300 px-56"
          >
            <ProfileInformationForm />
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <div
            key="profileInfo"
            className="w-full grid grid-rows-2 gap-1 px-5 mt-10"
          >
            <div className="grid grid-cols-[200px_200px]">
              <span className="text-dark-400">Display name</span>
              <span>Feri</span>
            </div>
            <div className="grid grid-cols-[200px_200px]">
              <span className="text-dark-400">Gender</span>
              <span>helicopter</span>
            </div>
            <div className="grid grid-cols-[200px_200px]">
              <span className="text-dark-400">Birth date</span>
              <span>27.včera.86bc</span>
            </div>
          </div>
        </AnimatePresence>
      )}
    </div>
  );
}
