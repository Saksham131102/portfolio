import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 }
      );
    }

    // Check if the password matches the admin password set in environment variables
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      console.error("ADMIN_PASSWORD environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (password !== adminPassword) {
      console.log("Invalid password");

      return NextResponse.json(
        { success: false, error: "Invalid password" },
        { status: 401 }
      );
    }

    // If password is correct, set a cookie with the admin token
    const adminToken = process.env.ADMIN_TOKEN;

    if (!adminToken) {
      console.error("ADMIN_TOKEN environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Set the admin token cookie
    cookies().set({
      name: "admin_token",
      value: adminToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      // Expire after 24 hours
      maxAge: 60 * 60 * 24,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in admin login API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
