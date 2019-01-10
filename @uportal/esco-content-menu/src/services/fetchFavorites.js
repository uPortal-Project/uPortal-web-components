import oidc from '@uportal/open-id-connect';

export default async function(userInfoApiUrl, layoutApiUrl, debug) {
  try {
    const headers = debug
      ? {}
      : {
        'Authorization':
            'Bearer ' +
            (await oidc({userInfoApiUrl: userInfoApiUrl})).encoded,
        'content-type': 'application/jwt',
      };

    const options = {
      method: 'GET',
      credentials: 'same-origin',
      headers: headers,
    };

    const response = await fetch(layoutApiUrl, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    if (
      data?.authenticated &&
      data?.layout?.globals?.hasFavorites &&
      data?.layout?.favorites
    ) {
      return data.layout.favorites;
    }
    return [];
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
    return [];
  }
}
