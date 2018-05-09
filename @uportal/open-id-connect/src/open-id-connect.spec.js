import {
  isTokenExpStillValid,
  milliSecondsUntilExpires
} from "./open-id-connect";
import { DateTime } from "luxon";

test("Error is expired", () => {
  expect(isTokenExpStillValid(new Error())).toBe(false);
});

test("NaN is expired", () => {
  expect(isTokenExpStillValid(NaN)).toBe(false);
});

test("zero time is expired", () => {
  expect(isTokenExpStillValid(0)).toBe(false);
});

test("negative time is expired", () => {
  expect(isTokenExpStillValid(-1)).toBe(false);
});

test("positive time is valid", () => {
  expect(isTokenExpStillValid(1)).toBe(true);
});

test("expires includes time smear", () => {
  expect(
    milliSecondsUntilExpires(0, 1000, DateTime.utc(1970, 1, 1, 0, 0, 0))
  ).toBe(1000);
});
