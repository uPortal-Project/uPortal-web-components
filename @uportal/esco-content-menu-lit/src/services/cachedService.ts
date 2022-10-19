export default class cachedService {
  protected static _enabled = true;
  protected static _token = '';
  protected static _ttl = 60; // default cache timeout
  static set enabled(enabled: boolean) {
    this._enabled = enabled;
  }
  static set token(token: string) {
    if (this._token == '') this._token = token;
  }
  static set cacheTtl(ttl: number) {
    this._ttl = ttl;
  }
  static async getDatas(url: string, options: RequestInit | undefined) {
    if (!this._enabled || !window.caches) {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.error(response.statusText);
      }
      return response.json();
    }

    const cacheName = this.generateCacheName(this._token);

    let cachedDatas = await this.getCachedData(cacheName, url);

    if (!cachedDatas) {
      await this.addToCache(cacheName, url, options);
      cachedDatas = await this.getCachedData(cacheName, url);
      await this.deleteOldCaches(cacheName, url);
    }

    return cachedDatas;
  }
  static async getCachedData(cacheName: string, url: string): Promise<any> {
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(url);
    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }
    return await cachedResponse.json();
  }
  static async addToCache(
    cacheName: string,
    url: string,
    options: RequestInit | undefined
  ): Promise<void> {
    const cacheStorage = await caches.open(cacheName);
    const response = await fetch(url, options);
    if (!response.ok) {
      console.error(url, options, response.statusText);
    }
    return await cacheStorage.put(url, response);
  }
  static async deleteCachedData(url: string): Promise<boolean> {
    const cacheName = this.generateCacheName(this._token);
    const cacheStorage = await caches.open(cacheName);
    return await cacheStorage.delete(url);
  }
  static async deleteOldCaches(cacheName: string, url: string): Promise<void> {
    const keys = await caches.keys();
    for (const key of keys) {
      if (cacheName === key) {
        continue;
      } else {
        if (await this.getCachedData(key, url)) {
          caches.delete(key);
        }
      }
    }
  }
  static generateCacheName(token: string) {
    const timestamp = Math.floor(Date.now() / (1000 * this._ttl));
    return `${timestamp}_${token}`;
  }
}
