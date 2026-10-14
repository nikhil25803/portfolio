import { useEffect, useState } from "react";
import quotes from "../data/quotes.json";
import {
  advanceTypewriter,
  getTypewriterDelay,
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
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const quote = quotes[state.quoteIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!shouldAnimate(interactionPaused, reducedMotion)) return;

    const timeout = window.setTimeout(
      () => setState((current) => advanceTypewriter(current, quote.quote.length, quotes.length)),
      getTypewriterDelay(state.phase),
    );
    return () => window.clearTimeout(timeout);
  }, [
    interactionPaused,
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
      className="quote-block w-full border-l-2 border-textPrimary py-1 pl-4"
      tabIndex={0}
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
      onFocusCapture={() => setInteractionPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setInteractionPaused(false);
      }}
    >
      <blockquote className="quote-copy text-lg text-textWhite" aria-hidden="true">
        “{visibleQuote}<span className="typewriter-cursor" aria-hidden="true">|</span>”
      </blockquote>
      <p className="sr-only">“{quote.quote}”</p>
      <figcaption className="mt-2 text-sm text-textGray">
        <span className="block text-textPrimary">{quote.by}</span>
        <span className="block">{quote.from}</span>
      </figcaption>
    </figure>
  );
};

export default Quote;
