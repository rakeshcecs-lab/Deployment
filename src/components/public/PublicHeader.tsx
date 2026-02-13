import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { siteConfig } from "@/config/site.config";

const navItems = [
  { label: "About", href: ROUTES.ABOUT },
  { label: "Products", href: ROUTES.PRODUCTS },
  { label: "Pricing", href: ROUTES.PRICING },
  { label: "Blog", href: ROUTES.BLOG },
  { label: "Resources", href: "/resources" },
  { label: "Support", href: "/support" },
];

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-12">
        <Link href={ROUTES.HOME} className="text-lg font-semibold text-gray-900">
          {siteConfig.name}
        </Link>

        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={ROUTES.LOGIN}
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:bg-white"
          >
            Sign in
          </Link>
          <Link
            href={ROUTES.REGISTER}
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
