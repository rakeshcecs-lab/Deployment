import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { ROUTES } from "@/lib/constants";

export default function ResetPasswordPage() {
  return (
    <AuthShell
      title="Create a new password"
      subtitle="Choose a strong password to keep your account protected."
      footer={
        <p className="text-sm text-gray-600">
          Need help?{" "}
          <Link href={ROUTES.CONTACT} className="font-semibold text-gray-900">
            Contact support
          </Link>
        </p>
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Set new password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Passwords should be at least 8 characters.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-900">
            New password
            <input
              type="password"
              placeholder="Enter a new password"
              className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 shadow-sm outline-none transition focus:border-foreground"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-gray-900">
            Confirm password
            <input
              type="password"
              placeholder="Re-enter your password"
              className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 shadow-sm outline-none transition focus:border-foreground"
            />
          </label>
          <button
            type="button"
            className="mt-2 h-11 rounded-full bg-gray-900 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Update password
          </button>
        </form>

        <div className="text-xs text-gray-600">
          You will be redirected to sign in after saving your new password.
        </div>
      </div>
    </AuthShell>
  );
}
