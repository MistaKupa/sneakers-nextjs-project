"use client";

import { useState } from "react";
import ContactInput from "./ContactInput";
import { motion, AnimatePresence } from "motion/react";

function ContactEmailForm({ profile, setIsEmailOpen }) {
  const { email } = profile;

  const [newEmail, setNewEmail] = useState(email || newEmail);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setNewEmail(email);
    setIsEmailOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.05,
        type: "spring",
        stiffness: 100,
      }}
      className="max-w-96 flex flex-col gap-5 p-10 bg-dark-200 rounded-md shadow-xl"
    >
      <h3 className="text-3xl font-semibold">Login email</h3>

      <p className="text-dark-400">
        Enter your new email address that you want to use for login and
        communication. You must confirm your new email address using the link
        that will be sent to your new email address automatically after
        submitting this form.
      </p>

      <form className="w-72 flex flex-col items-center justify-center gap-10">
        <ContactInput
          inputId="email"
          label="Email"
          type="email"
          value={newEmail}
          autoComplete="on"
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
        />
        <div className="flex justify-between w-full gap-5">
          <button
            className="w-full h-10 rounded-md bg-dark-300 text-dark-500"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="w-full h-10 rounded-md text-newWhite bg-newPrimary font-semibold">
            Save
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default ContactEmailForm;
