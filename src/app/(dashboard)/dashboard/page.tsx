export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Stats grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Sales</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">$45,231</p>
              <p className="mt-1 text-sm text-green-600">+20.1% from last month</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">New Customers</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">+2,350</p>
              <p className="mt-1 text-sm text-green-600">+18.2% from last month</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Deals</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">573</p>
              <p className="mt-1 text-sm text-gray-600">+48 from last week</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">24.5%</p>
              <p className="mt-1 text-sm text-green-600">+4.2% from last month</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="mt-6 rounded-xl border border-gray-200 bg-white">
        <div className="border-b border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="flex items-center gap-4 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">New customer registered</p>
              <p className="text-sm text-gray-600">Sarah Johnson joined the platform</p>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>

          <div className="flex items-center gap-4 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Deal closed</p>
              <p className="text-sm text-gray-600">Acme Corp - $12,500</p>
            </div>
            <span className="text-sm text-gray-500">4 hours ago</span>
          </div>

          <div className="flex items-center gap-4 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Meeting scheduled</p>
              <p className="text-sm text-gray-600">Demo call with Tech Solutions Ltd</p>
            </div>
            <span className="text-sm text-gray-500">Yesterday</span>
          </div>
        </div>
      </div>
    </div>
  );
}
