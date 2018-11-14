export default function flattenFavorites(elem) {
  // undefined has no favorites
  if (elem === undefined) {
    return [];
  }

  // recursively cycle through children
  if (Array.isArray(elem)) {
    return elem.flatMap(flattenFavorites);
  }

  const {content} = elem;
  // if there is no content it is a leaf node
  if (!content) {
    const {fname} = elem;
    // return fname when availible
    return fname ? [fname] : [];
  }

  // if there is content process it
  return flattenFavorites(content);
}
