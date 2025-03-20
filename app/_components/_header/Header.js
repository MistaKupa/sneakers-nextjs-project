"use client";

import { SessionProvider } from "next-auth/react";
import CartIcon from "./_cartIcon/CartIcon";
import Navigation from "./_navigation/Navigation";
import UserAvatar from "./_userAvatar/UserAvatar";

export default function Header() {
  return (
    <header className="relative flex justify-between items-center h-28 w-full border-b px-20">
      <Navigation />
      <div className="flex justify-between items-center gap-16">
        <CartIcon />
        <SessionProvider>
          <UserAvatar />
        </SessionProvider>
      </div>
    </header>
  );
}
