import { supabase } from "@/app/_lib/supabase-server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const token = getCookie("access_token", { req: request });

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Authorization required" },
        { status: 401 }
      );
    }

    const { userId, email, password, data } = await request.json();

    if (!userId) {
      return NextResponse(
        { success: false, error: "User ID is required" },
        { status: 400 }
      );
    }

    const updates = {};

    if (email) updates.email = email;
    if (password) updates.password = password;
    if (data) updates.data = { ...data }; // object of data

    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { success: false, error: "No updates provided" },
        { status: 400 }
      );
    }

    console.log(updates);

    const { error } = await supabase.auth.updateUser(updates);

    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Update succesfull" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
