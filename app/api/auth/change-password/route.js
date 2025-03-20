import { supabase } from "@/app/_lib/supabase-server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { oldPassword, newPassword } = await request.json();

    const { data: user, error: userError } = await supabase.auth.getUser();

    console.log(user);

    if (userError || !user) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Please log in again." },
        { status: 401 }
      );
    }
    // Verify old password
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: user.user.email,
      password: oldPassword,
    });

    if (signInError) {
      return NextResponse.json(
        { success: false, error: "Old password incorrect" },
        { status: 400 }
      );
    }

    // Change password
    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (updateError) {
      return NextResponse.json(
        { success: false, error: updateError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Password updated successfully!",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
