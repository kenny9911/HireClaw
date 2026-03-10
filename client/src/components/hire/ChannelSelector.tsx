import { Channel, CHANNEL_LABELS } from '@hireclaw/shared'

export function ChannelSelector({
  selectedChannel,
  onSelect,
}: {
  selectedChannel: Channel | undefined
  onSelect: (channel: Channel) => void
}) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-white">Connect a Channel</h2>
      <div className="flex flex-wrap gap-4">
        {Object.values(Channel).map((channel) => {
          const info = CHANNEL_LABELS[channel]
          const isSelected = selectedChannel === channel

          return (
            <button
              key={channel}
              type="button"
              onClick={() => onSelect(channel)}
              className={`flex min-w-[140px] flex-1 flex-col items-center rounded-xl border p-6 text-center transition-all ${
                isSelected
                  ? 'border-transparent bg-dark-500 shadow-[0_0_16px_rgba(6,182,212,0.2)] ring-2 ring-cyan-500'
                  : 'border-dark-200 bg-dark-500 hover:border-dark-100 hover:bg-dark-400'
              }`}
            >
              <span className="text-3xl">{info.icon}</span>
              <h3 className="mt-3 text-sm font-semibold text-white">{info.name}</h3>
            </button>
          )
        })}
      </div>
    </div>
  )
}
