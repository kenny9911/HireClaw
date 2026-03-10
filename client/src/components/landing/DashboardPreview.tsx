const agents = [
  { name: 'Nova', role: 'Software Engineer', tasks: 1847, status: 'Active' },
  { name: 'Atlas', role: 'CTO', tasks: 923, status: 'Active' },
  { name: 'Chase', role: 'Sales Rep', tasks: 2341, status: 'Active' },
]

export const DashboardPreview = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark-500/50 border border-dark-200/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-500/5 backdrop-blur-sm">
          {/* Mock header bar */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-4 text-xs text-gray-500 font-mono">dashboard.hireclaw.com</span>
          </div>

          {/* Agent cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="bg-dark-300 border border-dark-200/50 rounded-xl p-5 hover:border-dark-200 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-100">{agent.name}</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400">{agent.status}</span>
                  </div>
                </div>

                <span className="inline-block px-2.5 py-1 text-xs font-medium bg-dark-500 text-gray-300 rounded-full border border-dark-200/50">
                  {agent.role}
                </span>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-100">
                    {agent.tasks.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-500">tasks completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
