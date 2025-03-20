"use client";

import Image from "next/image";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import UserAvatarPopup from "./UserAvatarPopup";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function UserAvatar() {
  const { data: session } = useSession();

  const userName = session?.user?.name || "Guest Guest";
  const userInitials = userName
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  const userImage = session?.user?.image || "";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center rounded-full">
      {session ? (
        <button className="rounded-full" onClick={() => setIsOpen(!isOpen)}>
          {userImage ? (
            <Image
              src={userImage}
              alt={session.user.name || "User"}
              width={35}
              height={35}
              referrerPolicy="no-referrer"
              className="rounded-full w-full h-full border-2 border-transparent hover:border-2  hover:border-newPrimary  transition-all duration-300"
            />
          ) : (
            <span className="flex items-center justify-center bg-newPrimary border rounded-full w-12 h-12 text-newWhite font-semibold hover:border-newPrimary hover:bg-opacity-95">
              {userInitials}
            </span>
          )}
        </button>
      ) : (
        <Link href="/login">
          <IoPersonOutline
            size={27}
            className="text-dark-500 hover:text-newPrimary  transition-all duration-300"
          />
        </Link>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="avatarPopup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 right-0 z-50"
          >
            <UserAvatarPopup />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
