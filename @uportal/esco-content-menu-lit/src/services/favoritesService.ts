import oidc from '../../@uportal/open-id-connect/src/open-id-connect';
// import oidc from '@uportal/open-id-connect';

export default class favoritesService {
  static async fetch(
    userInfoApiUrl: string,
    layoutApiUrl: string,
    debug: boolean
  ): Promise<LayoutContentGroup[] | null> {
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

      const response = await fetch(layoutApiUrl, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const layout: FetchLayout = await response.json();

      if (
        layout?.authenticated &&
        layout?.layout?.globals?.hasFavorites &&
        layout?.layout?.favorites
      ) {
        return layout.layout.favorites;
      }
      return null;
    } catch (err) {
      // eslint-disable-next-line
      console.error(err, userInfoApiUrl, layoutApiUrl, debug);
      return null;
    }
  }

  static async add(
    userInfoApiUrl: string,
    favoriteApiUrl: string,
    chanId: string
  ): Promise<boolean> {
    try {
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set(
        'Authorization',
        (await oidc({ userInfoApiUrl })).encoded
      );

      const options = {
        method: 'POST',
        credentials: 'same-origin' as RequestCredentials,
        headers: requestHeaders,
      };
      const addUrl = favoriteApiUrl + '?action=addFavorite&channelId=' + chanId;
      const response = await fetch(addUrl, options);

      if (response.ok) {
        return true;
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
      return false;
    }
  }

  static async remove(
    userInfoApiUrl: string,
    favoriteApiUrl: string,
    chanId: string
  ): Promise<boolean> {
    try {
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set(
        'Authorization',
        (await oidc({ userInfoApiUrl })).encoded
      );

      const options = {
        method: 'POST',
        credentials: 'same-origin' as RequestCredentials,
        headers: requestHeaders,
      };
      const addUrl =
        favoriteApiUrl + '?action=removeFavorite&channelId=' + chanId;
      const response = await fetch(addUrl, options);

      if (response.ok) {
        return true;
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
      return false;
    }
  }

  static flattenFavorites(
    favorites:
      | LayoutContentGroup[]
      | LayoutContentItem[]
      | LayoutContentGroup
      | LayoutContentItem
      | null
  ): string[] {
    // undefined has no favorites
    if (!favorites) {
      return [];
    }

    // recursively cycle through children
    if (Array.isArray(favorites)) {
      return favorites.flatMap(favoritesService.flattenFavorites);
    }

    if ((favorites as LayoutContentGroup).content !== undefined) {
      return favoritesService.flattenFavorites(
        (favorites as LayoutContentGroup).content
      );
    }

    if ((favorites as LayoutContentItem).fname !== undefined) {
      return [(favorites as LayoutContentItem).fname];
    }

    return [];
  }
}
