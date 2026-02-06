import Link from "next/link";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { ROUTES } from "@/lib/constants";

export default function NotFoundPage() {
  return (
    <PublicPageShell
      eyebrow="404"
      title="Page not found."
      subtitle="The page you’re looking for doesn’t exist, was moved, or never existed."
    >
      {/* Info Cards */}
      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "What happened?",
            copy: "The URL might be incorrect, or the page may have been removed during an update.",
          },
          {
            title: "What you can do",
            copy: "Check the URL, go back to the previous page, or navigate to the dashboard or homepage.",
          },
          {
            title: "Need help?",
            copy: "If you believe this is an error, our team can help you find what you need.",
          },
          {
            title: "Pro tip",
            copy: "Bookmark important pages to quickly return without relying on URLs.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-border bg-white/90 p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-foreground">
              {item.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{item.copy}</p>
          </div>
        ))}
      </section>

      {/* Helpful Stats / Quick Info */}
      <section className="grid gap-6 rounded-3xl border border-border bg-white/80 p-8 shadow-sm lg:grid-cols-3">
        {[
          { value: "24/7", label: "platform availability" },
          { value: "<1s", label: "average page response time" },
          { value: "99.9%", label: "uptime reliability" },
        ].map((stat) => (
          <div key={stat.value} className="flex flex-col gap-2">
            <span className="text-3xl font-semibold text-foreground">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-white/90 p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-foreground">
          Let’s get you back on track
        </h3>
        <p className="text-sm text-muted-foreground">
          Head back home or contact our team if you need assistance.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href={ROUTES.HOME}
            className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Go Home
          </Link>

          <Link
            href={ROUTES.CONTACT}
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </PublicPageShell>
  );
}
