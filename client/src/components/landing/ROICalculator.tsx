import { useState } from 'react'

const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)

export const ROICalculator = () => {
  const [employees, setEmployees] = useState(4)
  const [hourlyRate, setHourlyRate] = useState(35)
  const [dailyHours, setDailyHours] = useState(6)

  const annualCurrentCost = employees * hourlyRate * dailyHours * 260
  const withHireClaw = 49 * 12 * Math.ceil(employees / 3)
  const annualSavings = annualCurrentCost - withHireClaw
  const roiMultiple = withHireClaw > 0 ? (annualCurrentCost / withHireClaw).toFixed(1) : '0'

  return (
    <section id="roi" className="py-20 lg:py-28 bg-dark-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-100 mb-4">
          Calculate Your Savings
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
          See how much you could save by replacing repetitive admin work with AI employees.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Employees doing admin work
              </label>
              <input
                type="number"
                min={1}
                max={100}
                value={employees}
                onChange={(e) => setEmployees(Math.max(1, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-dark-300 border border-dark-200 rounded-lg text-gray-100 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Average hourly rate ($)
              </label>
              <input
                type="number"
                min={10}
                max={500}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Math.max(10, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-dark-300 border border-dark-200 rounded-lg text-gray-100 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Daily admin hours per employee
              </label>
              <input
                type="number"
                min={1}
                max={12}
                value={dailyHours}
                onChange={(e) => setDailyHours(Math.max(1, Number(e.target.value)))}
                className="w-full px-4 py-3 bg-dark-300 border border-dark-200 rounded-lg text-gray-100 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
          </div>

          {/* Results */}
          <div className="bg-dark-300 border border-dark-200/50 rounded-xl p-6 space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Current Annual Spend</p>
              <p className="text-2xl font-bold text-gray-100">{formatCurrency(annualCurrentCost)}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">With HireClaw</p>
              <p className="text-2xl font-bold text-gray-100">{formatCurrency(withHireClaw)}</p>
            </div>

            <div className="pt-4 border-t border-dark-200">
              <p className="text-sm text-gray-500 mb-1">Annual Savings</p>
              <p className="text-3xl font-bold gradient-text">
                {formatCurrency(Math.max(0, annualSavings))}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">ROI</p>
              <p className="text-2xl font-bold text-gray-100">{roiMultiple}x return</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
