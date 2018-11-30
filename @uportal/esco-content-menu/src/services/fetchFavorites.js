import oidc from '@uportal/open-id-connect';

export default async function(contextApiUrl) {
  if (process.env.NODE_ENV === 'development') {
    return [
      {fname: 'search'},
      {fname: 'CourrielAcademique'},
      {fname: 'portal-activity'},
      {fname: 'calendar'},
      {fname: 'Helpinfo'},
      {fname: 'MILycees'},
    ];
  }

  try {
    const {encoded} = await oidc({
      userInfoApiUrl: contextApiUrl + process.env.VUE_APP_USER_INFO_URI,
    });
    const options = {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Authorization': 'Bearer ' + encoded,
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(
        contextApiUrl + process.env.VUE_APP_FAVORITES_URI,
        options
    );
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
