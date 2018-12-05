import oidc from '@uportal/open-id-connect';
import _ from 'lodash';

export default async function(contextApiUrl, userAllOrgIdAttribute) {
  if (process.env.NODE_ENV === 'development') {
    const userInfoRequest = await fetch('userinfo.json');
    const orgsInfoRequest = await fetch('orginfo.json');

    const [userInfo, orgsInfo] = await Promise.all([
      userInfoRequest.json(),
      orgsInfoRequest.json(),
    ]);
    return {
      user: userInfo,
      organizations: Object.values(orgsInfo),
    };
  } else {
    try {
      const {encoded, decoded} = await oidc({
        userInfoApiUrl: contextApiUrl + process.env.VUE_APP_USER_INFO_URI,
      });
      const orgIds = _.get(decoded, userAllOrgIdAttribute, null);
      if (orgIds?.length > 0) {
        const options = {
          method: 'GET',
          credentials: 'same-origin',
          headers: {
            'Authorization': 'Bearer ' + encoded,
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(
            process.env.VUE_APP_PORTAL_BASE_URL +
            process.env.VUE_APP_ORG_INFO_URI +
            '?ids=' +
            orgIds,
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
}
