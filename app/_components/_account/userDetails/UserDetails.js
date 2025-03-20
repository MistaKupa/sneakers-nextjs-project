import { useSession } from "next-auth/react";

export default function UserDetails() {
  const { data: session } = useSession();

  const userName = session?.user?.name || "Guest Guest";
  const userInitials = userName
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  const userEmail = session?.user?.email || "";
  const userImage = session?.user?.image || "";

  return (
    <div className="flex items-center justify-start gap-5">
      <div className="w-14 h-14 flex items-center justify-center bg-newPrimary text-newWhite rounded-full">
        {userInitials}
      </div>
      <div className="flex flex-col text-dark-500 text-sm">
        <span className="font-bold">{userName}</span>
        <span className="text-dark-400">{userEmail}</span>
        <span className="text-dark-400">Customer discount 7%</span>
      </div>
    </div>
  );
}
