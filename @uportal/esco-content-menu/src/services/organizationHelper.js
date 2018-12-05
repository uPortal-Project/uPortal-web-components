import _ from 'lodash';

export function getCurrentOrganization(
    user,
    userOrgIdAttribute,
    organizations
) {
  const currentUserOrgId = _.get(user, userOrgIdAttribute, null);
  if (_.isString(currentUserOrgId) && organizations?.length > 0) {
    return organizations.find((entry) => entry.id === currentUserOrgId);
  } else if (organizations?.length > 0) {
    return organizations[0];
  }
  return null;
}

export function getOrganizationLogo(organization, attributeName) {
  const entry = _.get(organization, attributeName, null);
  if (Array.isArray(entry)) {
    return entry[0];
  }
  return entry;
}
