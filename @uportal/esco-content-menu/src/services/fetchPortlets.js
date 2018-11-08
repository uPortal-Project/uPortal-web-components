import oidc from '@uportal/open-id-connect';

export default async function(contextApiUrl) {
  if (process.env.NODE_ENV === 'development') {
    const response = await fetch('browseable.json');
    const {portlets} = await response.json();
    return portlets;
  } else {
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
          contextApiUrl + process.env.VUE_APP_BROWSABLE_PORTLETS_URI,
          options
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const {portlets} = await response.json();

      return portlets;
    } catch (err) {
      console.error(err);
    }
  }
}
