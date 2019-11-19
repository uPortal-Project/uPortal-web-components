import decode from 'jwt-decode';

/**
 * Options for getting tokens
 * @typedef {Object} Options
 * @property {string} [userInfoApiUrl] - url to Open ID Connect endpoint
 * @property {number} [timeout] - time in milliseconds until token will be
 *                                invalid
 * @property {Object} [propertyTransforms] - apply additional transforms to
 *                                           specific properties
 */

/**
 * Callback to resolve Open ID Connect token
 * @callback tokenCallback
 * @param {?Error} err -
 * @param {?Object} token - with encoded and decoded values
 */

/**
 * Get token from uPortal Open ID Connect service
 * @param {Options} [options] - allow setting a custom user info API url and a
 *                              custom clock smear
 * @param {tokenCallback} [callback] - optional callback, alternative to Promise
 *                                     API
 * @return {Promise<Object>} Promise that resolves with the encoded and decoded
 *                           token in an Object
 */
export default async function openIdConnect(
  {
    userInfoApiUrl = '/uPortal/api/v5-1/userinfo',
    propertyTransforms = {}
  } = {},
  callback
) {
  try {
    // get a new token
    const response = await fetch(userInfoApiUrl, {
      method: 'GET',
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.text();

    // store the encoded and decoded versions
    const token = tokenize(data);

    // Allow for additional transforms to be applied to decoded properties
    Object.entries(propertyTransforms).forEach(([property, transform]) => {
      token.decoded[property] = transform(token.decoded[property]);
    });

    // pass value to optional call back
    if (callback) {
      return callback(null, token);
    }

    // resolve the promise
    return token;
  } catch (err) {
    // pass back error for callback
    if (callback) {
      return callback(err);
    }

    // re-throw error for promises
    throw err;
  }
}

/**
 * Extract JWT contents
 * @param {string} jwt - JSON Web Token to decode
 * @return {Object} with encoded and decoded values
 */
export function tokenize(jwt) {
  return {
    encoded: jwt,
    decoded: decode(jwt)
  };
}
