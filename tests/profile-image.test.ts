import assert from "node:assert/strict";
import test from "node:test";
import { pickNextImageIndex } from "../src/utils/profile-image.ts";

test("keeps the current image when only one image exists", () => {
  assert.equal(pickNextImageIndex(0, 1, 0.5), 0);
});

test("never immediately repeats an image", () => {
  for (let current = 0; current < 4; current += 1) {
    for (const randomValue of [0, 0.25, 0.5, 0.999999]) {
      assert.notEqual(pickNextImageIndex(current, 4, randomValue), current);
    }
  }
});

test("always returns an in-range index", () => {
  for (const randomValue of [0, 0.999999]) {
    const next = pickNextImageIndex(2, 3, randomValue);
    assert.ok(next >= 0 && next < 3);
  }
});
