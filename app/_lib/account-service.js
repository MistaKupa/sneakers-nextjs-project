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
