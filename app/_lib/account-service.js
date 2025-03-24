import { createClientInstance } from "@/utils/supabase/client";

import toast from "react-hot-toast";

export async function updatePassword(newPassword, oldPassword) {
  try {
    const response = await fetch("/api/auth/change-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword, oldPassword }),
    });

    const result = await response.json();

    if (!result.success) {
      toast.error(result.error);
      return false;
    }

    toast.success(result.message);
    return true;
  } catch (error) {
    toast.error("Something went wrong, please try again.");
    return false;
  }
}

export async function updateProfileInfo(
  newBirthDate,
  newGender,
  newDisplayName
) {
  try {
    const supabase = createClientInstance();
    const { data: user, error: userError } = await supabase.auth.getUser();

    console.log(user);

    if (!user || userError) {
      console.error(userError);
    }

    const { data, error } = await supabase
      .from("profiles")
      .update({
        birth_date: newBirthDate,
        gender: newGender,
        display_name: newDisplayName,
      })
      .eq("user_id", user.user.id);

    if (error) {
      console.error(error);
      throw new Error("Couldnt update profile information.");
    }

    toast.success("Profile information updated succesfully");
    return true;
  } catch (error) {
    toast.error(error.message);
    return false;
  }
}
