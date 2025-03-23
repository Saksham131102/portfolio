"use client";

import { useState } from "react";
import { StarRating } from "@/components/ui/star-rating";

export default function GuestbookForm() {
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(formData: FormData) {
    setSubmitting(true);
    setFeedback(null);

    try {
      formData.set("rating", rating.toString());
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          message: formData.get("message"),
          rating: formData.get("rating"),
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setFeedback({
          type: "success",
          message: data.message,
        });
        (document.getElementById("guestbook-form") as HTMLFormElement).reset();
        setRating(5);
      } else {
        setFeedback({
          type: "error",
          message:
            data.error || "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFeedback({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      id="guestbook-form"
      action={handleSubmit}
      className="space-y-6 border border-[#b3b3b3] dark:border-gray-800 p-6 rounded-lg shadow-sm"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
      </div>

      {/* <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Your email won&apos;t be published
        </p>
      </div> */}

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Rating</label>
        <StarRating
          rating={rating}
          editable={true}
          onChange={setRating}
          size={28}
        />
      </div>

      {feedback && (
        <div
          className={`p-3 rounded-md ${
            feedback.type === "success"
              ? "bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200"
              : "bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200"
          }`}
        >
          {feedback.message}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Submit Feedback"}
        </button>
      </div>
    </form>
  );
}
