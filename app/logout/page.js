"use client"; // Add this to specify that this is a Client Component

import { createClientInstance } from "@/utils/supabase/client";
import { useRouter } from "next/navigation"; // Using Next.js router for client-side navigation

function Logout() {
  const supabase = createClientInstance();
  const router = useRouter(); // useRouter for client-side navigation

  const handleLogout = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/login"); // Navigate to login page after logout
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
