export type TypewriterPhase = "typing" | "holding" | "deleting";

export interface TypewriterState {
  quoteIndex: number;
  characterCount: number;
  phase: TypewriterPhase;
}

export const TYPEWRITER_DELAYS: Record<TypewriterPhase, number> = {
  typing: 45,
  holding: 3000,
  deleting: 25,
};

export function getTypewriterDelay(phase: TypewriterPhase) {
  return TYPEWRITER_DELAYS[phase];
}

export function pickRandomQuoteIndex(
  quoteCount: number,
  randomValue = Math.random(),
) {
  if (quoteCount <= 1) return 0;
  return Math.min(Math.floor(randomValue * quoteCount), quoteCount - 1);
}

export function pickNextQuoteIndex(
  currentIndex: number,
  quoteCount: number,
  randomValue = Math.random(),
) {
  if (quoteCount <= 1) return currentIndex;

  const offset = 1 + Math.floor(randomValue * (quoteCount - 1));
  return (currentIndex + offset) % quoteCount;
}

export function advanceTypewriter(
  state: TypewriterState,
  quoteLength: number,
  quoteCount: number,
  randomValue = Math.random(),
): TypewriterState {
  if (state.phase === "typing") {
    return state.characterCount < quoteLength
      ? { ...state, characterCount: state.characterCount + 1 }
      : { ...state, phase: "holding" };
  }

  if (state.phase === "holding") return { ...state, phase: "deleting" };

  if (state.characterCount > 0) {
    return { ...state, characterCount: state.characterCount - 1 };
  }

  return {
    quoteIndex: pickNextQuoteIndex(state.quoteIndex, quoteCount, randomValue),
    characterCount: 0,
    phase: "typing",
  };
}

export function shouldAnimate(
  interactionPaused: boolean,
  reducedMotion: boolean,
  phase: TypewriterPhase,
) {
  return !reducedMotion && !(interactionPaused && phase === "holding");
}
