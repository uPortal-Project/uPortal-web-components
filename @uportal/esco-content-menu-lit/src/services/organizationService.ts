import cachedService from './cachedService';
import oidc, { type Response as OIDCResponse } from '@uportal/open-id-connect';
import get from 'lodash/get';
import isString from 'lodash/isString';
import textHelper from '@helpers/textHelper';

export default class OrganizationService extends cachedService {
  static async fetch(
    userInfoApiUrl: string,
    orgApiUrl: string,
    userAllOrgIdAttribute: string,
    userInfo: OIDCResponse | null = null,
    debug = false
  ): Promise<OrganizationFetchResult | null> {
    let orgInfo: OrgInfo | null = null;
    let fetchUrl = '';
    try {
      const requestHeaders: HeadersInit = new Headers();
      if (debug) {
        const userInfoRequest = await fetch(userInfoApiUrl);
        userInfo = {
          encoded: '',
          decoded: await userInfoRequest.json(),
        };
        fetchUrl = orgApiUrl;
        this.token = textHelper.hashCode('debug');
      } else {
        if (userInfo === null || !userInfo?.encoded) {
          userInfo = await oidc({
            userInfoApiUrl,
          });
        }
        this.token = textHelper.hashCode(
          userInfo.decoded.iss + userInfo.decoded.name
        );
        const orgIds = get(userInfo.decoded, userAllOrgIdAttribute, null);
        requestHeaders.set('Authorization', `Bearer ${userInfo.encoded}`);
        if ((orgIds as string)?.length > 0)
          fetchUrl = orgApiUrl + '?ids=' + orgIds;
      }

      if (orgApiUrl?.length > 0 && fetchUrl.length > 0) {
        const options = {
          method: 'GET',
          credentials: 'same-origin' as RequestCredentials,
          headers: requestHeaders,
        };

        orgInfo = await this.getDatas(fetchUrl, options);
      }
      return {
        user: userInfo?.decoded,
        organizations: orgInfo,
      } as OrganizationFetchResult;
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
      return null;
    }
  }

  static getCurrentOrganization(
    user: UserInfo,
    userOrgIdAttribute: string,
    organizations: OrgInfo
  ): Organization | null {
    const currentUserOrgId = get(user, userOrgIdAttribute, null);
    const orgs = Object.keys(organizations).map((index) => {
      return organizations[index];
    });
    if (isString(currentUserOrgId) && orgs?.length > 0) {
      return orgs.find((entry) => entry.id === currentUserOrgId) ?? null;
    } else if (orgs?.length > 0) {
      return orgs[0];
    }
    return null;
  }

  static getOrganizationLogo(
    organization: Organization | null,
    attributeName: string
  ): string | null {
    if (!organization) return '';
    const entry = get(organization, attributeName, null);
    if (Array.isArray(entry)) {
      return isString(entry[0]) ? entry[0] : null;
    }
    return isString(entry) ? entry : null;
  }
}
