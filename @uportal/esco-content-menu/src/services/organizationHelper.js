export function getCurrentOrganization(
    user,
    userOrgIdAttribute,
    organizations
) {
  if (user && user[userOrgIdAttribute] && organizations?.length > 0) {
    return organizations.find(
        (entry) => entry.id === user[userOrgIdAttribute][0]
    );
  } else if (organizations?.length > 0) {
    return organizations[0];
  }
  return null;
}

export function getOrganizationLogo(organization, attributeName) {
  let entry = null;
  if (organization && organization[attributeName]?.length > 0) {
    entry = organization[attributeName];
  } else if (
    organization?.hasOwnProperty('otherAttributes') &&
    organization.otherAttributes[attributeName]?.length > 0
  ) {
    entry = organization.otherAttributes[attributeName];
  }
  if (Array.isArray(entry)) {
    return entry[0];
  }
  return entry;
}
