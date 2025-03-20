"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { motion } from "motion/react";
import { useState } from "react";
import { setCookie } from "cookies-next/client";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setErrorMessage("Invalid email or password. Please try again.");
      return;
    }
    router.push("/main/site/women");
  };

  return (
    <>
      <div className="absolute -top-48 -right-10 w-[2200px] h-[500px] -rotate-12 -z-10">
        <Image
          src="/images/bg-main-desktop-horizontal.png"
          alt="background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-[1440px] h-screen flex items-center justify-center">
        <div className="absolute w-9/12 h-full border -z-20"></div>
        <div className="absolute w-9/12 top-10">
          <Link href="/">
            <Image
              src="/images/logo_white.svg"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <motion.div
          key="loginForm"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: errorMessage ? [0, -10, 10, -10, 10, 0] : 0,
          }}
          transition={{
            duration: 0.3,
            type: errorMessage ? "" : "spring",
            stiffness: 100,
          }}
          className=" bg-dark-100 w-[35rem] h-[40rem] flex flex-col justify-center shadow-xl rounded-lg items-center px-20 gap-10"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
            <div>
              <h2 className="text-dark-500 text-3xl font-semibold">
                Sign in to your account
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <span className="h-5">
                {errorMessage && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-red-500"
                  >
                    {errorMessage}
                  </motion.span>
                )}
              </span>

              <label
                htmlFor="email"
                className="text-dark-500 font-medium flex flex-col gap-1"
              >
                Email
                <input
                  value={email}
                  type="email"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email..."
                  className="rounded-md px-2 h-12 bg-dark-100 font-normal outline-newPrimary border"
                />
              </label>
              <label
                htmlFor="password"
                className="text-dark-500 font-medium flex flex-col gap-1"
              >
                Password
                <input
                  value={password}
                  type="password"
                  id="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password..."
                  className="rounded-md px-2 h-12 bg-dark-100 font-normal outline-newPrimary border"
                />
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1 }}
              type="submit"
              className="w-full bg-newPrimary text-newWhite h-10 rounded-md"
            >
              Sign in
            </motion.button>
          </form>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            onClick={() => signIn("google")}
            className="w-full bg-newPrimary text-newWhite h-10 rounded-md flex items-center justify-center gap-2"
          >
            Sign in with Google
            <Image
              src="/images/google_logo.png"
              alt="Google"
              width={25}
              height={25}
            />
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}
