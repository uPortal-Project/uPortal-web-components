import oidc from '@uportal/open-id-connect';
import uniqBy from 'lodash/uniqBy';

export default class portletService {
  static async fetch(
    userInfoApiUrl: string,
    portletApiUrl: string,
    debug: boolean
  ): Promise<FetchPortletResult | undefined> {
    try {
      const requestHeaders: HeadersInit = new Headers();
      if (!debug) {
        requestHeaders.set(
          'Authorization',
          (await oidc({ userInfoApiUrl })).encoded
        );
      }

      const options = {
        method: 'GET',
        credentials: 'same-origin' as RequestCredentials,
        headers: requestHeaders,
      };

      const response = await fetch(portletApiUrl, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const portlets: FetchPortletResult = await response.json();

      return portlets;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }

  /**
   * Combines a array of arrays into a single level array
   * @param {Array<Portlet>} acc - accumulator that combines all the arrays
   * @param {Array<Portlet>} arr - new array to add to the accumulator
   * @return {Array<Portlet>} merged arrays
   */
  private static flatten(acc: Portlet[], arr: Portlet[]): Portlet[] {
    return acc.concat(arr);
  }

  /**
   * Takes the returned array from treeWalker and removes duplicates
   * based on "fname"
   * @param {Object} registryJson Portlet Registry Tree
   * @return {Array<Portlet>} list of portlets
   */
  static portletRegistryToArray(registryJson: FetchPortletResult): Portlet[] {
    return portletService.customUnique(portletService.treeWalker(registryJson));
  }

  /**
   * Walks the portlet registry tree
   * @param {Object} registryJson Portlet Registry Tree
   * @return {Array<Portlet>} list of portlets
   */
  private static treeWalker(
    registryJson: FetchPortletResult | PortletRegistry | PortletCategory
  ): Portlet[] {
    // If result
    if ((registryJson as FetchPortletResult).registry !== undefined) {
      return portletService.treeWalker(
        (registryJson as FetchPortletResult).registry
      );
    }

    let portlets = [];

    // If Category
    if ((registryJson as PortletCategory).portlets !== undefined) {
      portlets = (registryJson as PortletCategory).portlets;
      if (portlets.length > 0) {
        portlets.forEach(
          (portlet: Portlet) =>
            (portlet.categories = new Array(
              (registryJson as PortletCategory).name
            ))
        );
      }
    }

    // If Registry
    if ((registryJson as PortletRegistry).categories !== undefined) {
      return portlets
        .concat(
          (registryJson as PortletRegistry).categories.map(
            portletService.portletRegistryToArray
          )
        )
        .reduce(portletService.flatten, []);
    }

    // If Category 2
    if ((registryJson as PortletCategory).subcategories !== undefined) {
      return portlets
        .concat(
          (registryJson as PortletCategory).subcategories.map(
            portletService.portletRegistryToArray
          )
        )
        .reduce(portletService.flatten, []);
    }

    return portlets;
  }

  /**
   * Custom function to remove duplicates portlet on fname, but with merging categories.
   * @param {Array<Portlet>} array - Portlet List with duplicates.
   * @return {Array<Portlet>} Portlet List without duplicates.
   */
  private static customUnique(array: Portlet[]): Portlet[] {
    const unique = uniqBy(array, 'fname');
    // we construct unique portlets array will all linked categories (reversing category and portlets child)
    unique.forEach((elem) => {
      const dupl = array.filter((e) => e.fname === elem.fname);
      const allCategories = dupl.flatMap(({ categories }) => categories);
      elem.categories = [...new Set(allCategories)];
    });
    return unique;
  }

  static getAlternativeMaximizedUrl(portlet: Portlet): string {
    return portlet?.parameters?.alternativeMaximizedLink?.value;
  }

  static getRenderUrl(portlet: Portlet, context: string): string {
    return portlet?.parameters?.alternativeMaximizedLink?.value
      ? portlet.parameters.alternativeMaximizedLink.value
      : `${context}/p/${portlet.fname}`;
  }

  static sortPortlets(a: Portlet, b: Portlet): number {
    // if parameter is missing or an invalid integer, Not a Number (NaN) will be set
    let aCustomOrder = parseInt(a?.parameters?.escoMenuOrder?.value, 10);
    let bCustomOrder = parseInt(b?.parameters?.escoMenuOrder?.value, 10);

    if (isNaN(aCustomOrder)) {
      aCustomOrder = parseInt(
        a?.layoutObject?.parameters.escoMenuOrder as string,
        10
      );
    }
    if (isNaN(bCustomOrder)) {
      bCustomOrder = parseInt(
        b?.layoutObject?.parameters.escoMenuOrder as string,
        10
      );
    }

    // if neither has a custom order, sort by title
    if (isNaN(aCustomOrder) && isNaN(bCustomOrder)) {
      return a.title
        .trim()
        .toLowerCase()
        .localeCompare(b.title.trim().toLowerCase(), undefined, {
          numeric: true,
        });
    }

    // sort the items with custom order in front of items without
    if (isNaN(aCustomOrder)) {
      return 1;
    }
    if (isNaN(bCustomOrder)) {
      return -1;
    }

    // both items are custom, sort using the number line
    // lower numbers first, higher numbers after
    return aCustomOrder - bCustomOrder;
  }
}
