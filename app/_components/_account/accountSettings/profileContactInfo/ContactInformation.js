"use client";

import { useUserProfile } from "@/hooks/useUSerProfile";
import LoadingSpinner from "../../../loadingspinner/LoadingSpinner";
import { motion, AnimatePresence } from "motion/react";
import ContactEmailForm from "./ContactEmailForm";
import { useState } from "react";

export default function ContactInformation() {
  const { profile, isLoading, error } = useUserProfile();

  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);

  return (
    <div className="flex flex-col gap-10 ">
      <div className="w-full h-14 flex items-center justify-between px-5 bg-dark-200 border border-dark-300 rounded-md">
        <h3 className="text-dark-500 text-xl font-medium">
          Contact information
        </h3>
      </div>

      {isLoading ? (
        <AnimatePresence>
          <motion.div
            key="spinner"
            exit={{ opacity: 0, scale: 0 }}
            className="w-full h-20 flex items-end justify-center"
          >
            <LoadingSpinner />
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          <div className="w-full grid grid-rows-3 gap-1 px-5">
            {/*EMAIL ROW*/}
            <div className=" grid grid-cols-[200px_200px_1fr]">
              <span className="text-dark-400">Email</span>
              <span>{profile.email}</span>
              <button
                className="place-self-end text-newPrimary text-sm font-medium"
                onClick={() => setIsEmailOpen(!isEmailOpen)}
              >
                Update
              </button>
            </div>

            {/*PHONE ROW*/}
            <div className="grid grid-cols-[200px_200px_1fr]">
              <span className="text-dark-400">Phone Number</span>
              <span>{profile.user_phone}</span>
              <button className="place-self-end text-newPrimary text-sm font-medium">
                Update
              </button>
            </div>
          </div>

          {/*EMAIL FORM */}
          {isEmailOpen && (
            <>
              <div className="fixed inset-0 z-5 bg-lightBox opacity-60"></div>
              <div className="fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                <ContactEmailForm
                  profile={profile}
                  setIsEmailOpen={setIsEmailOpen}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
