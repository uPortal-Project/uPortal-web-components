import get from 'lodash/get';
import isString from 'lodash/isString';

export function getCurrentOrganization(
  user,
  userOrgIdAttribute,
  organizations
) {
  const currentUserOrgId = get(user, userOrgIdAttribute, null);
  if (isString(currentUserOrgId) && organizations?.length > 0) {
    return organizations.find(entry => entry.id === currentUserOrgId);
  } else if (organizations?.length > 0) {
    return organizations[0];
  }
  return null;
}

export function getOrganizationLogo(organization, attributeName) {
  const entry = get(organization, attributeName, null);
  if (Array.isArray(entry)) {
    return entry[0];
  }
  return entry;
}
