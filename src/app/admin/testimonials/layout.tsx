export const metadata = {
  title: "Testimonials Admin | Portfolio",
  description: "Admin panel to manage testimonials",
};

// Force this page to be dynamically rendered
export const dynamic = "force-dynamic";
export const revalidate = false;
export const fetchCache = "force-no-store";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
