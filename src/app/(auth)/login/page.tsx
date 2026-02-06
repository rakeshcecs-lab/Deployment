import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { ROUTES } from "@/lib/constants";

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to keep your pipeline flowing and your team aligned."
      footer={
        <p className="text-sm text-muted-foreground">
          New here?{" "}
          <Link href={ROUTES.REGISTER} className="font-semibold text-foreground">
            Create an account
          </Link>
        </p>
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">Sign in</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Use your company email and password to continue.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            Email address
            <input
              type="email"
              placeholder="you@company.com"
              className="h-11 rounded-xl border border-border bg-white px-4 text-sm text-foreground shadow-sm outline-none transition focus:border-foreground"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            Password
            <input
              type="password"
              placeholder="Enter your password"
              className="h-11 rounded-xl border border-border bg-white px-4 text-sm text-foreground shadow-sm outline-none transition focus:border-foreground"
            />
          </label>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-muted-foreground">
              <input type="checkbox" className="h-4 w-4 rounded border-border" />
              Remember me
            </label>
            <Link
              href={ROUTES.FORGOT_PASSWORD}
              className="font-semibold text-foreground"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="button"
            className="mt-2 h-11 rounded-full bg-foreground text-sm font-semibold text-background shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="h-px flex-1 bg-border" />
          or continue with
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
