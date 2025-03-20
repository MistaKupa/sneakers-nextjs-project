import Image from "next/image";
import Link from "next/link";

export default function LogoBlack() {
  return (
    <div className="flex items-center justify-center pb-1">
      <Link href="/">
        <Image
          src="/images/logo_black.svg"
          alt="Sneakers Logo"
          width={138}
          height={20}
        />
      </Link>
    </div>
  );
}
