import AccountMenu from "@/app/_components/_account/accountMenu/AccountMenu";
import Image from "next/image";

export default function AccountLayout({ children }) {
  return (
    <main>
      <div className="w-full h-28">
        <div className="relative w-full h-full">
          <Image
            src="/images/bg-main-desktop-horizontal.png"
            alt="bg-image"
            fill
            className=""
          />
        </div>
      </div>
      <section className="relative mx-auto py-14 flex items-center justify-center max-w-[1440px]">
        <AccountMenu />
        {children}
      </section>
    </main>
  );
}
