let bearerToken = null;

export default async function openIdConnect({
  setTimeout = setTimeout, // allow a custom timeout function to be used
  userInfoApiUrl = '/uPortal/api/v5-1/userinfo',
  tokenTimeoutMs = 180000, // 3 minutes
  callback = () => {}, // optional callback
}) {
  if (bearerToken !== null) {
    return bearerToken;
  }

  const response = await fetch(userInfoApiUrl, {
    credentials: 'same-origin',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  bearerToken = await response.text();

  // clear token after timeout has passed
  setTimeout(() => {
    bearerToken = null;
  }, tokenTimeoutMs);

  callback(bearerToken);

  return bearerToken;
}
