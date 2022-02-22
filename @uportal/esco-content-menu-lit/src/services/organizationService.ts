import oidc from '@uportal/open-id-connect';
import type { JWT } from '@uportal/open-id-connect';
import get from 'lodash/get';
import isString from 'lodash/isString';

export default class OrganizationService {
  static async fetch(
    userInfoApiUrl: string,
    orgApiUrl: string,
    userAllOrgIdAttribute: string,
    debug: boolean
  ): Promise<OrganizationFetchResult | null> {
    let userInfo: UserInfo | JWT | null = null;
    let orgInfo: OrgInfo | null = null;
    let fetchUrl = '';
    try {
      const requestHeaders: HeadersInit = new Headers();
      if (debug) {
        const userInfoRequest = await fetch(userInfoApiUrl);
        userInfo = await userInfoRequest.json();
        fetchUrl = orgApiUrl;
      } else {
        const { encoded, decoded } = await oidc({
          userInfoApiUrl,
        });
        userInfo = decoded;
        const orgIds = get(decoded, userAllOrgIdAttribute, null);
        requestHeaders.set('Authorization', encoded);
        if ((orgIds as string)?.length > 0)
          fetchUrl = orgApiUrl + '?ids=' + orgIds;
      }

      if (orgApiUrl?.length > 0 && fetchUrl.length > 0) {
        const options = {
          method: 'GET',
          credentials: 'same-origin' as RequestCredentials,
          headers: requestHeaders,
        };
        const response = await fetch(fetchUrl, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        orgInfo = await response.json();
      }
      return {
        user: userInfo,
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
