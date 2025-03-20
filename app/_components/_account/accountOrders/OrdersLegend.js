"use client";

import Link from "next/link";
import { IoEllipseOutline } from "react-icons/io5";
import UserDetails from "../userDetails/UserDetails";
import { SessionProvider } from "next-auth/react";

export default function OrdersLegend() {
  return (
    <div className="sticky top-10 left-0 h-screen flex flex-col gap-10 p-4">
      <SessionProvider>
        <UserDetails />
      </SessionProvider>
      <div className="flex justify-start">
        <ul className="text-dark-500 hover:underline hover:underline-offset-2 flex flex-col gap-2 items-start">
          <li>
            <Link href="" className="flex items-center justify-center gap-3">
              <IoEllipseOutline size={21} className="text-green-500" />
              New
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center justify-center gap-3">
              <IoEllipseOutline size={21} className="text-amber-500" />
              Pending
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center justify-center gap-3">
              <IoEllipseOutline size={21} className="text-blue-500" />
              Accepted
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center justify-center gap-3">
              <IoEllipseOutline size={21} className="text-gray-500" />
              Packed
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center justify-center gap-3">
              <IoEllipseOutline size={21} className="text-black" />
              Sent
            </Link>
          </li>
          <li>
            <Link href="" className="flex items-center justify-center gap-3">
              <IoEllipseOutline size={21} className="text-red-500" />
              Canceled
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
