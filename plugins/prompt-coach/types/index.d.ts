export type Review = {
  status: 'idle' | 'analyzing' | 'done' | 'held' | 'error'
  original: string
  score: number
  isGood: boolean
  tips: string[]
  improved: string
  error: string
  note: string
}

declare module 'claude-code' {
  interface PluginState {
    'prompt-coach': { review: Shaped<Review>; isOn: boolean; isHolding: boolean }
  }
}
