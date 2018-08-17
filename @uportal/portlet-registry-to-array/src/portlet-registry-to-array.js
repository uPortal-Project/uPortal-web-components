/**
 * Combines a array of arrays into a single level array
 * @param {Array<Portlet>} acc - accululator that combines all the arrays
 * @param {Array<Portlet>} arr - new array to add to the accumulator
 * @return {Array<Portlet>} merged arrays
 */
function flatten(acc, arr) {
  return acc.concat(arr);
}

/**
 * Walks the portlet registry tree
 * @param {Object} registryJson Portlet Registry Tree
 * @return {Array<Portlet>} list of portlets
 */
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
