import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { ROUTES } from "@/lib/constants";

export default function RegisterPage() {
  return (
    <AuthShell
      title="Create your workspace"
      subtitle="Set up your account and bring your revenue team together in minutes."
      footer={
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href={ROUTES.LOGIN} className="font-semibold text-foreground">
            Sign in
          </Link>
        </p>
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Get started</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Use a work email so we can personalize your setup.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            Full name
            <input
              type="text"
              placeholder="Alex Johnson"
              className="h-11 rounded-xl border border-border bg-white px-4 text-sm text-foreground shadow-sm outline-none transition focus:border-foreground"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            Work email
            <input
              type="email"
              placeholder="alex@company.com"
              className="h-11 rounded-xl border border-border bg-white px-4 text-sm text-foreground shadow-sm outline-none transition focus:border-foreground"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            Password
            <input
              type="password"
              placeholder="Create a secure password"
              className="h-11 rounded-xl border border-border bg-white px-4 text-sm text-foreground shadow-sm outline-none transition focus:border-foreground"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            Team size
            <select className="h-11 rounded-xl border border-border bg-white px-4 text-sm text-foreground shadow-sm outline-none transition focus:border-foreground">
              <option>1-5 people</option>
              <option>6-20 people</option>
              <option>21-100 people</option>
              <option>100+ people</option>
            </select>
          </label>
          <label className="flex items-start gap-2 text-xs text-muted-foreground">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-border" />
            I agree to the terms of service and privacy policy.
          </label>
          <button
            type="button"
            className="mt-2 h-11 rounded-full bg-foreground text-sm font-semibold text-background shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Create account
          </button>
        </form>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="h-px flex-1 bg-border" />
          or sign up with
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {["Google", "Microsoft"].map((provider) => (
            <button
              key={provider}
              type="button"
              className="h-11 rounded-full border border-border bg-white text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {provider}
            </button>
          ))}
        </div>
      </div>
    </AuthShell>
  );
}
