export default function UsersPage() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Team Members</h1>
          <p className="mt-1 text-sm text-gray-600">
            Manage your sales team and permissions
          </p>
        </div>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Add Member
        </button>
      </div>

      <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-3">
          <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-600">
            <div>Name</div>
            <div>Email</div>
            <div>Role</div>
            <div className="text-right">Status</div>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {[
            { name: "John Doe", email: "john@company.com", role: "Admin", status: "Active" },
            { name: "Sarah Johnson", email: "sarah@company.com", role: "Manager", status: "Active" },
            { name: "Mike Chen", email: "mike@company.com", role: "Sales Rep", status: "Active" },
            { name: "Emily Davis", email: "emily@company.com", role: "Sales Rep", status: "Active" },
            { name: "Alex Wilson", email: "alex@company.com", role: "Manager", status: "Invited" },
          ].map((user, i) => (
            <div key={i} className="grid grid-cols-4 gap-4 p-6 text-sm hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                  {user.name.split(" ").map(n => n[0]).join("")}
                </div>
                <span className="font-medium text-gray-900">{user.name}</span>
              </div>
              <div className="flex items-center text-gray-600">{user.email}</div>
              <div className="flex items-center">
                <span className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-600">
                  {user.role}
                </span>
              </div>
              <div className="flex items-center justify-end">
                <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                  user.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-orange-100 text-orange-600"
                }`}>
                  {user.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Members</p>
              <p className="text-2xl font-bold text-gray-900">25</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending Invites</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
