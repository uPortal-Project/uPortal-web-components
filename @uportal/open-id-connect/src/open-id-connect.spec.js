import {isExpired, milliSecondsUntilExpires} from './open-id-connect';
import {DateTime} from 'luxon';

test('NaN is expired', () => {
  expect(isExpired(NaN)).toBe(true);
});

test('zero time is expired', () => {
  expect(isExpired(0)).toBe(true);
});

test('negative time is expired', () => {
  expect(isExpired(-1)).toBe(true);
});

test('expires includes time smear', () => {
  expect(
    milliSecondsUntilExpires(0, 1000, DateTime.utc(1970, 1, 1, 0, 0, 0))
  ).toBe(1000);
});
