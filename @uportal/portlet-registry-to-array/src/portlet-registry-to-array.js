function flatten(acc, arr) {
  return acc.concat(arr);
}

export function portletRegistryToArray(registryJson) {
  if (registryJson.registry) {
    return portletRegistryToArray(registryJson.registry);
  }

  const portlets = registryJson.portlets || [];

  if (registryJson.categories) {
    return portlets
      .concat(registryJson.categories.map(portletRegistryToArray))
      .reduce(flatten, []);
  }
  if (registryJson.subcategories) {
    return portlets
      .concat(registryJson.subcategories.map(portletRegistryToArray))
      .reduce(flatten, []);
  }

  return portlets;
}
