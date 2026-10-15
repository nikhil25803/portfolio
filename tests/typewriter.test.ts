import assert from "node:assert/strict";
import test from "node:test";
import {
  advanceTypewriter,
  getTypewriterDelay,
  pickNextQuoteIndex,
  pickRandomQuoteIndex,
  shouldAnimate,
  TYPEWRITER_DELAYS,
  type TypewriterState,
} from "../src/utils/typewriter.ts";

test("types, holds, and deletes a quote", () => {
  let state: TypewriterState = { quoteIndex: 0, characterCount: 0, phase: "typing" };
  state = advanceTypewriter(state, 1, 2);
  assert.deepEqual(state, { quoteIndex: 0, characterCount: 1, phase: "typing" });
  state = advanceTypewriter(state, 1, 2);
  assert.equal(state.phase, "holding");
  state = advanceTypewriter(state, 1, 2);
  assert.equal(state.phase, "deleting");
  state = advanceTypewriter(state, 1, 2);
  assert.equal(state.characterCount, 0);
});

test("selects a deterministic random quote on page load", () => {
  assert.equal(pickRandomQuoteIndex(5, 0), 0);
  assert.equal(pickRandomQuoteIndex(5, 0.5), 2);
  assert.equal(pickRandomQuoteIndex(5, 0.999999), 4);
});

test("always selects an in-range initial quote", () => {
  for (const randomValue of [0, 0.25, 0.5, 0.999999]) {
    const index = pickRandomQuoteIndex(5, randomValue);
    assert.ok(index >= 0 && index < 5);
  }
});

test("keeps the current quote when only one quote exists", () => {
  assert.equal(pickNextQuoteIndex(0, 1, 0.5), 0);
});

test("never immediately repeats a quote", () => {
  for (let current = 0; current < 4; current += 1) {
    for (const randomValue of [0, 0.25, 0.5, 0.999999]) {
      assert.notEqual(pickNextQuoteIndex(current, 4, randomValue), current);
    }
  }
});

test("advances to a random non-repeating quote after deletion", () => {
  const state = advanceTypewriter(
    { quoteIndex: 2, characterCount: 0, phase: "deleting" },
    4,
    4,
    0.5,
  );
  assert.deepEqual(state, { quoteIndex: 0, characterCount: 0, phase: "typing" });
});

test("pauses interactions only while holding and always respects reduced motion", () => {
  assert.equal(shouldAnimate(false, false, "holding"), true);
  assert.equal(shouldAnimate(true, false, "typing"), true);
  assert.equal(shouldAnimate(true, false, "holding"), false);
  assert.equal(shouldAnimate(true, false, "deleting"), true);
  assert.equal(shouldAnimate(false, true, "typing"), false);
});

test("uses the requested typewriter timing", () => {
  assert.deepEqual(TYPEWRITER_DELAYS, { typing: 45, holding: 3000, deleting: 25 });
  assert.equal(getTypewriterDelay("holding"), 3000);
});

test("contains thirteen unique quotes", async () => {
  const { readFile } = await import("node:fs/promises");
  const quotes = JSON.parse(
    await readFile(new URL("../src/data/quotes.json", import.meta.url), "utf8"),
  ) as Array<{ quote: string; by: string; from: string }>;

  assert.equal(quotes.length, 13);
  assert.equal(new Set(quotes.map(({ quote }) => quote)).size, 13);
  assert.ok(quotes.every(({ quote, by, from }) => quote && by && from));
});
