import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { siteConfig } from "@/config/site.config";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: ROUTES.PRODUCTS },
      { label: "Pricing", href: ROUTES.PRICING },
      { label: "Security", href: "/resources" },
      { label: "Roadmap", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: ROUTES.ABOUT },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: ROUTES.CONTACT },
      { label: "Support", href: "/support" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: ROUTES.BLOG },
      { label: "FAQ", href: ROUTES.FAQ },
      { label: "Help Center", href: "/support" },
      { label: "Status", href: "/resources" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export function PublicFooter() {
  return (
    <footer className="border-t border-border bg-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-5 lg:px-12">
        <div className="lg:col-span-2">
          <div className="text-lg font-semibold text-foreground">
            {siteConfig.name}
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Built for revenue teams that want clarity, consistency, and calm.
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3 text-sm">
            <span className="font-semibold text-foreground">{column.title}</span>
            {column.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-2 px-6 py-6 text-xs text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <span>© 2026 {siteConfig.author}. All rights reserved.</span>
          <span>Sales operations, analytics, and CRM in one calm workspace.</span>
        </div>
      </div>
    </footer>
  );
}
