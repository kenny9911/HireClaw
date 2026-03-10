export function WizardProgress({
  steps,
  currentStep,
}: {
  steps: string[]
  currentStep: number
}) {
  return (
    <div className="flex items-center justify-center gap-0">
      {steps.map((label, i) => {
        const stepNum = i + 1
        const isCompleted = stepNum < currentStep
        const isCurrent = stepNum === currentStep
        const isFuture = stepNum > currentStep

        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  isCompleted
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : isCurrent
                      ? 'border-2 border-transparent bg-dark-500 text-white shadow-[0_0_12px_rgba(6,182,212,0.5)] ring-2 ring-cyan-500'
                      : 'bg-dark-300 text-gray-500'
                }`}
              >
                {isCompleted ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  isCompleted || isCurrent ? 'text-gray-100' : 'text-gray-500'
                }`}
              >
                {label}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={`mx-2 h-0.5 w-12 ${
                  stepNum < currentStep
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600'
                    : 'bg-dark-200'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
