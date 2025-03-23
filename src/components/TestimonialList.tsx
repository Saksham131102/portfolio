import { DisplayRating } from "./ui/star-rating";

interface ITestimonial {
  _id: string;
  name: string;
  message: string;
  rating: number;
  approved: boolean;
  createdAt: string;
  updatedAt: string;
}

interface TestimonialListProps {
  testimonials: ITestimonial[];
  limit?: number;
  gridLayout?: boolean;
}

// Helper function to format date consistently
function formatDate(dateString: string) {
  const date = new Date(dateString);

  // Format as "04 Mar, 2025"
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
}

export default function TestimonialList({
  testimonials,
  limit,
  gridLayout = false,
}: TestimonialListProps) {
  // If limit is provided, only show that many testimonials
  const displayedTestimonials = limit
    ? testimonials.slice(0, limit)
    : testimonials;

  if (displayedTestimonials.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <p className="mt-0 dark:text-[#b3b3b3] text-black">
          No testimonials yet. Be the first to leave feedback!
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        gridLayout ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"
      }
    >
      {displayedTestimonials.map((testimonial) => (
        <div
          key={testimonial._id}
          className="p-6 rounded-lg shadow-sm border border-[#b3b3b3] dark:border-gray-800 h-full"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-medium">{testimonial.name}</h3>
              <DisplayRating rating={testimonial.rating} className="mt-1" />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(testimonial.createdAt)}
            </div>
          </div>

          <p className="dark:text-[#b3b3b3] text-black">
            {testimonial.message}
          </p>
        </div>
      ))}
    </div>
  );
}
