import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import {
  IoCogOutline,
  IoLogOutOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { TfiPackage } from "react-icons/tfi";
import UserDetails from "../../_account/userDetails/UserDetails";

export default function UserAvatarPopup() {
  return (
    <div className="min-w-72 flex flex-col items-start gap-5 py-6 px-6 bg-dark-100 border shadow-sm text-dark-500 rounded-md z-50">
      <Link href="">
        <UserDetails />
      </Link>

      <span className="border-t w-full"></span>
      <div className="w-full flex flex-col items-start gap-4 mt-3 ">
        <motion.div
          whileTap={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.05, x: 3 }}
          className="min-w-44"
        >
          <Link
            className="flex gap-4 hover:text-newPrimary transition-all duration-200"
            href=""
          >
            <IoPersonOutline size={23} />
            <span>Account</span>
          </Link>
        </motion.div>
        <motion.div
          whileTap={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.05, x: 3 }}
          className="min-w-44"
        >
          <Link
            className="flex gap-4 hover:text-newPrimary transition-all duration-200"
            href="/main/account/accountSettings"
          >
            <IoCogOutline size={23} />
            <span>Account settings</span>
          </Link>
        </motion.div>
        <motion.div
          whileTap={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.05, x: 3 }}
          className="min-w-44"
        >
          <Link
            className="flex gap-4 hover:text-newPrimary transition-all duration-200"
            href="/main/account/myOrders"
          >
            <TfiPackage size={23} />
            <span>My orders</span>
          </Link>
        </motion.div>
        <motion.div
          whileTap={{ scale: 1, x: 0 }}
          whileHover={{ scale: 1.05, x: 3 }}
          className="min-w-44"
        >
          <Link
            className="flex gap-4 hover:text-newPrimary transition-all duration-200"
            href="/api/auth/signout"
          >
            <IoLogOutOutline size={23} />
            <span>Logout</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
