import oidc from '@uportal/open-id-connect';
import get from 'lodash/get';

export default async function (
  userInfoApiUrl,
  organizationApiUrl,
  userAllOrgIdAttribute,
  debug
) {
  try {
    if (debug) {
      const userInfoRequest = await fetch(userInfoApiUrl);
      if (organizationApiUrl?.length > 0) {
        const orgsInfoRequest = await fetch(organizationApiUrl);

        const [userInfo, orgsInfo] = await Promise.all([
          userInfoRequest.json(),
          orgsInfoRequest.json(),
        ]);
        return {
          user: userInfo,
          organizations: Object.values(orgsInfo),
        };
      }
      const userInfo = await userInfoRequest.json();
      return {
        user: userInfo,
        organizations: [],
      };
    }

    const { encoded, decoded } = await oidc({ userInfoApiUrl: userInfoApiUrl });

    const orgIds = get(decoded, userAllOrgIdAttribute, null);
    if (orgIds?.length > 0 && organizationApiUrl?.length > 0) {
      const options = {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          Authorization: 'Bearer ' + encoded,
          'Content-Type': 'application/jwt',
        },
      };
      const response = await fetch(
        organizationApiUrl + '?ids=' + orgIds,
        options
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();

      return {
        user: decoded,
        organizations: Object.values(data),
      };
    }
    // do nothing expect returning an empty value
    return {
      user: decoded,
      organizations: [],
    };
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
    return {
      user: {},
      organizations: [],
    };
  }
}
