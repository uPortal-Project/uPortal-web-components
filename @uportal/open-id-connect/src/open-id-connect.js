import {get} from 'axios';
import {decode} from 'jsonwebtoken';
import {DateTime} from 'luxon';

let token = null;

/**
 * Options for getting tokens
 * @typedef {Object} Options
 * @property {string} [userInfoApiUrl] - url to Open ID Connect endpoint
 * @property {number} [smear] - time in milliseconds of smear needed to offset clock skew
 */

/**
 * Callback to resolve Open ID Connect token
 * @callback tokenCallback
 * @param {?Error} err -
 * @param {?Object} token - with encoded and decoded values
 */

/**
 * Get token from uPortal Open ID Connect service
 * @param {Options} [options] - allow setting a custom user info API url and a custom clock smear
 * @param {tokenCallback} [callback] - optional callback, alternative to Promise API
 * @return {Promise<Object>} Promise that resolves with the encoded and decoded token in an Object
 */
export default async function openIdConnect(
  {
    userInfoApiUrl = '/uPortal/api/v5-1/userinfo',
    smear = 1000, // Expect clocks to be as much as a second off
  } = {},
  callback
) {
  // If there already is a valid token, resolve it
  if (token !== null) {
    return token;
  }

  try {
    // get a new token
    const response = await get(userInfoApiUrl, {responseType: 'text'});

    // store the encoded and decoded versions
    token = {
      encoded: response,
      decoded: decode(response.data),
    };

    // check how long the token will be valid
    const msToExpiration = milliSecondsUntilExpires(token.decoded.exp, smear);

    // if it has already expired something is very wrong, raise exception to caller
    if (!isTokenExpStillValid(msToExpiration)) {
      throw new RangeError('token has already expired');
    }

    // automatically clear token after expiration
    setTimeout(() => {
      token = null;
    }, msToExpiration);

    // pass value to optional call back
    callback(null, token);

    // resolve the promise
    return token;
  } catch (err) {
    if (!callback) {
      // re-throw error for promises
      throw err;
    }

    // pass back error for callback
    callback(err);
  }
}

/**
 * Checks if token is still active based off duration until expiration
 * @param {number} duration - millisecond duration
 * @return {boolean} true for expired or invalid, false for active
 */
export function isTokenExpStillValid(duration) {
  return typeof duration === 'number' && duration >= 1;
}

/**
 * Check duration in milliseconds from now until expiration, accounting for clock skew
 * @param {number} expiration - UTC Epoch timestamp (in seconds)
 * @param {number} [smear] - time in milliseconds of smear needed to offset clock skew
 * @param {DateTime} [now] - current time
 */
export function milliSecondsUntilExpires(
  expiration,
  smear = 1000,
  now = DateTime.utc()
) {
  // Java generates timestamps in seconds, JavaScript expects milliseconds
  const expirationWithSmear = DateTime.fromMillis(expiration * 1000, {
    zone: 'utc',
  }).minus({
    milliseconds: smear,
  });

  // get the difference in milliseconds
  return now.diff(expirationWithSmear).as('milliseconds');
}
