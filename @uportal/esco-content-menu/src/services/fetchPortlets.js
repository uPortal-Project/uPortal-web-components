import oidc from '@uportal/open-id-connect';

export default async function (userInfoApiUrl, portletApiUrl, debug) {
  try {
    const headers = debug
      ? {}
      : {
          Authorization:
            'Bearer ' +
            (await oidc({ userInfoApiUrl: userInfoApiUrl })).encoded,
          'content-type': 'application/jwt',
        };

    const options = {
      method: 'GET',
      credentials: 'same-origin',
      headers: headers,
    };

    const response = await fetch(portletApiUrl, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const portlets = await response.json();

    return portlets;
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
    return [];
  }
}
