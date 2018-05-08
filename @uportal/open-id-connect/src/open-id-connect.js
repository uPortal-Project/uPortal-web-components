import {get} from 'axios';
import {decode} from 'jsonwebtoken';
import {DateTime} from 'luxon';

let token = null;

export default async function openIdConnect({
  userInfoApiUrl,
  smear = 1000, // Expect clocks to be as much as a second off
  callback = () => {}, // optional callback
}) {
  if (token !== null) {
    return token;
  }

  const response = await getToken(userInfoApiUrl);

  token = {
    encoded: response,
    decoded: decode(response.data),
  };

  const msToExpiration = milliSecondsUntilExpires(token.decoded.exp, smear);

  if (isExpired(msToExpiration)) {
    throw new RangeError('token has already expired');
  }

  // clear token after timeout has passed
  setTimeout(() => {
    token = null;
  }, msToExpiration);

  callback(token);

  return {
    token,
  };
}

export function isExpired(timeTilExpires) {
  return isNaN(timeTilExpires) || timeTilExpires < 1;
}

export async function getToken(userInfoApiUrl = '/uPortal/api/v5-1/userinfo') {
  return await get(userInfoApiUrl, {responseType: 'text'});
}

export function milliSecondsUntilExpires(
  expiration, // millisecond timestamp for expiration
  smear = 1000, // millisecond smear to account for clock differences
  now = DateTime.utc() // current time
) {
  // Java generates timestamps in seconds, JavaScript expects MilliSeconds
  const expirationWithSmear = DateTime.fromMillis(expiration * 1000, {
    zone: 'utc',
  }).minus({
    milliseconds: smear,
  });
  return now.diff(expirationWithSmear).as('milliseconds');
}
