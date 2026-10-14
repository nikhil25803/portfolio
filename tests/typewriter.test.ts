import assert from "node:assert/strict";
import test from "node:test";
import {
  advanceTypewriter,
  getTypewriterDelay,
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

test("wraps from the final quote to the first", () => {
  const state = advanceTypewriter(
    { quoteIndex: 2, characterCount: 0, phase: "deleting" },
    4,
    3,
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

test("contains sixteen unique quotes", async () => {
  const { readFile } = await import("node:fs/promises");
  const quotes = JSON.parse(
    await readFile(new URL("../src/data/quotes.json", import.meta.url), "utf8"),
  ) as Array<{ quote: string; by: string; from: string }>;

  assert.equal(quotes.length, 16);
  assert.equal(new Set(quotes.map(({ quote }) => quote)).size, 16);
  assert.ok(quotes.every(({ quote, by, from }) => quote && by && from));
});
