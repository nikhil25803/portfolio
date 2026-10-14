export type TypewriterPhase = "typing" | "holding" | "deleting";

export interface TypewriterState {
  quoteIndex: number;
  characterCount: number;
  phase: TypewriterPhase;
}

export const TYPEWRITER_DELAYS: Record<TypewriterPhase, number> = {
  typing: 45,
  holding: 5000,
  deleting: 25,
};

export function getTypewriterDelay(phase: TypewriterPhase) {
  return TYPEWRITER_DELAYS[phase];
}

export function advanceTypewriter(
  state: TypewriterState,
  quoteLength: number,
  quoteCount: number,
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
    quoteIndex: (state.quoteIndex + 1) % quoteCount,
    characterCount: 0,
    phase: "typing",
  };
}

export function shouldAnimate(paused: boolean, reducedMotion: boolean) {
  return !paused && !reducedMotion;
}
