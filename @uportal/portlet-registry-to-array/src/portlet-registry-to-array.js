import uniqBy from 'lodash/uniqBy';

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
 * Takes the returned array from treeWalker and removes duplicates
 * baed on "fname"
 * @param {Object} registryJson Portlet Registry Tree
 * @return {Array<Portlet>} list of portlets
 */
export function portletRegistryToArray(registryJson) {
  return uniqBy(treeWalker(registryJson), 'fname');
}

/**
 * Walks the portlet registry tree
 * @param {Object} registryJson Portlet Registry Tree
 * @return {Array<Portlet>} list of portlets
 */
function treeWalker(registryJson) {
  if (registryJson.registry) {
    return treeWalker(registryJson.registry);
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
