import { LLMModel, LLM_MODEL_LABELS } from '@hireclaw/shared'

export function ModelSelector({
  selectedModel,
  onSelect,
}: {
  selectedModel: LLMModel | undefined
  onSelect: (model: LLMModel) => void
}) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-white">Pick Your AI Model</h2>
      <div className="flex flex-wrap gap-4">
        {Object.values(LLMModel).map((model) => {
          const info = LLM_MODEL_LABELS[model]
          const isSelected = selectedModel === model
          const isRecommended = model === LLMModel.GPT_4O

          return (
            <button
              key={model}
              type="button"
              onClick={() => onSelect(model)}
              className={`relative flex min-w-[180px] flex-1 flex-col items-start rounded-xl border p-5 text-left transition-all ${
                isSelected
                  ? 'border-transparent bg-dark-500 shadow-[0_0_16px_rgba(6,182,212,0.2)] ring-2 ring-cyan-500'
                  : 'border-dark-200 bg-dark-500 hover:border-dark-100 hover:bg-dark-400'
              }`}
            >
              {isRecommended && (
                <span className="absolute -top-2.5 right-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-2.5 py-0.5 text-[10px] font-semibold text-white">
                  Recommended
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">{info.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{info.description}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
