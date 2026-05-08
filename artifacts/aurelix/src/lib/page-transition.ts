export const PAGE_TRANSITION_DURATION_MS = 320

export const pageVariants = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

export const pageTransition = {
  duration: PAGE_TRANSITION_DURATION_MS / 1000,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
}
