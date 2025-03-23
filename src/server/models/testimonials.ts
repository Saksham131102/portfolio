import mongoose, { Document, Schema, Model } from "mongoose";

export interface ITestimonial extends Document {
  name: string;
  message: string;
  rating: number;
  approved: boolean;
}

const testimonialSchema = new Schema<ITestimonial>(
  {
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial =
  (mongoose.models.Testimonial as Model<ITestimonial>) ||
  mongoose.model<ITestimonial>("Testimonial", testimonialSchema);

export default Testimonial;
