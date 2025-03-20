"use client";
import AccSettings from "@/app/_components/_account/accountSettings/AccSettings";
import { SessionProvider } from "next-auth/react";

export default function AccountSettings() {
  return (
    <div className="w-1/2">
      <AccSettings />
    </div>
  );
}
