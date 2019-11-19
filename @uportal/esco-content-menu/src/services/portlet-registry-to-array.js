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
 * based on "fname"
 * @param {Object} registryJson Portlet Registry Tree
 * @return {Array<Portlet>} list of portlets
 */
export function portletRegistryToArray(registryJson) {
  return customUnique(treeWalker(registryJson), 'fname');
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

  if (portlets.length > 0) {
    portlets.forEach(p => (p.categories = new Array(registryJson.name)));
  }

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

/**
 * Custom function to remove duplicates portlet on fname, but with merging categories.
 * @param {Array<Portlet>} array - Portlet List with duplicates.
 * @return {Array<Portlet>} Portlet List without duplicates.
 */
function customUnique(array) {
  const unique = uniqBy(array, 'fname');
  // we construct unique portlets array will all linked categories (reversing category and portlets child)
  unique.forEach(elem => {
    const dupl = array.filter(e => e.fname === elem.fname);
    const allCategories = dupl.flatMap(({ categories }) => categories);
    elem.categories = [...new Set(allCategories)];
  });
  return unique;
}
