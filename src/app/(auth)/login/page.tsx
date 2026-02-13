import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { ROUTES } from "@/lib/constants";

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to keep your pipeline flowing and your team aligned."
      footer={
        <p className="text-sm text-gray-600">
          New here?{" "}
          <Link href={ROUTES.REGISTER} className="font-semibold text-gray-900">
            Create an account
          </Link>
        </p>
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Sign in</h2>
          <p className="mt-2 text-sm text-gray-600">
            Use your company email and password to continue.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-900">
            Email address
            <input
              type="email"
              placeholder="you@company.com"
              className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 shadow-sm outline-none transition focus:border-foreground"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-900">
            Password
            <input
              type="password"
              placeholder="Enter your password"
              className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 shadow-sm outline-none transition focus:border-foreground"
            />
          </label>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-200" />
              Remember me
            </label>
            <Link
              href={ROUTES.FORGOT_PASSWORD}
              className="font-semibold text-gray-900"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="button"
            className="mt-2 h-11 rounded-full bg-gray-900 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center gap-4 text-xs text-gray-600">
          <div className="h-px flex-1 bg-gray-200" />
          or continue with
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {["Google", "Microsoft"].map((provider) => (
            <button
              key={provider}
              type="button"
              className="h-11 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {provider}
            </button>
          ))}
        </div>
      </div>
    </AuthShell>
  );
}
