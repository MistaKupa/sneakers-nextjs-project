"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createServerClientInstance } from "@/utils/supabase/server";

export async function login(formData) {
  const supabase = await createServerClientInstance();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: "Invalid email or password. Please try again." };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
