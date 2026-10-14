import { useEffect, useState } from "react";
import quotes from "../data/quotes.json";
import {
  advanceTypewriter,
  shouldAnimate,
  type TypewriterState,
} from "../utils/typewriter";

const INITIAL_STATE: TypewriterState = {
  quoteIndex: 0,
  characterCount: 0,
  phase: "typing",
};

const Quote = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const quote = quotes[state.quoteIndex];
  const paused = manuallyPaused || interactionPaused;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!shouldAnimate(paused, reducedMotion)) return;

    const delay = state.phase === "typing" ? 45 : state.phase === "holding" ? 10000 : 25;
    const timeout = window.setTimeout(
      () => setState((current) => advanceTypewriter(current, quote.quote.length, quotes.length)),
      delay,
    );
    return () => window.clearTimeout(timeout);
  }, [
    paused,
    quote.quote.length,
    reducedMotion,
    state.characterCount,
    state.phase,
    state.quoteIndex,
  ]);

  const visibleQuote = reducedMotion
    ? quote.quote
    : quote.quote.slice(0, state.characterCount);

  return (
    <figure
      className="quote-block border-l-2 border-textPrimary py-1 pl-4"
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setInteractionPaused(false);
      }}
    >
      <blockquote className="text-lg text-textWhite" aria-hidden="true">
        “{visibleQuote}<span className="typewriter-cursor" aria-hidden="true">|</span>”
      </blockquote>
      <p className="sr-only">“{quote.quote}”</p>
      <figcaption className="mt-2 flex items-end justify-between gap-4 text-sm text-textGray">
        <span>
          <span className="block text-textPrimary">{quote.by}</span>
          <span className="block">{quote.from}</span>
        </span>
        {!reducedMotion && (
          <button
            type="button"
            className="text-xs text-textGray hover:text-textWhite"
            aria-pressed={paused}
            onClick={() => {
              setInteractionPaused(false);
              setManuallyPaused(!paused);
            }}
          >
            {paused ? "play" : "pause"}
          </button>
        )}
      </figcaption>
    </figure>
  );
};

export default Quote;
