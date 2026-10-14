import assert from "node:assert/strict";
import test from "node:test";
import {
  advanceTypewriter,
  shouldAnimate,
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

test("stops for pause and reduced motion preferences", () => {
  assert.equal(shouldAnimate(false, false), true);
  assert.equal(shouldAnimate(true, false), false);
  assert.equal(shouldAnimate(false, true), false);
});
