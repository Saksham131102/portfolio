"use server";

import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Testimonial from "@/server/models/testimonials";

// ✅ Handle GET request (Fetch testimonials)
export async function GET(req: Request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const lim = searchParams.get("lim");
    const id = searchParams.get("id"); // Fetch a single testimonial by ID
    const approved = searchParams.get("approved");

    if (id) {
      const testimonial = await Testimonial.findById(id);
      if (!testimonial) {
        return NextResponse.json(
          { success: false, error: "Testimonial not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { success: true, data: testimonial },
        { status: 200 }
      );
    }

    const query: any = {};
    if (approved !== null) {
      query.approved = approved === "true";
    }

    if (lim) {
      const limit = parseInt(lim, 10);
      const topTestimonials = await Testimonial.find(query)
        .sort({ rating: -1 })
        .limit(limit);
      return NextResponse.json(
        { success: true, data: topTestimonials },
        { status: 200 }
      );
    }

    const testimonials = await Testimonial.find(query);
    return NextResponse.json(
      { success: true, data: testimonials },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 400 }
    );
  }
}

// ✅ Handle POST request (Create a new testimonial)
export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const testimonial = await Testimonial.create(body);
    return NextResponse.json(
      { success: true, data: testimonial },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 400 }
    );
  }
}

// ✅ Handle PUT request (Update a testimonial by ID)
export async function PUT(req: Request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      id,
      {
        ...body,
        updatedAt: new Date(),
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedTestimonial) {
      return NextResponse.json(
        { success: false, error: "Testimonial not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedTestimonial },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 400 }
    );
  }
}

// ✅ Handle DELETE request (Remove a testimonial by ID)
export async function DELETE(req: Request) {
  try {
    await connectToDatabase();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }

    const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

    if (!deletedTestimonial) {
      return NextResponse.json(
        { success: false, error: "Testimonial not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Testimonial deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 400 }
    );
  }
}
