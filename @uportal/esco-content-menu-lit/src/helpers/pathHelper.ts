export default class pathHelper {
  static getUrl(path: string, baseUrl = '', debug = false): string {
    if (!path.startsWith('http')) {
      baseUrl =
        baseUrl !== '' ? baseUrl : process.env.APP_PORTAL_BASE_URL ?? '';
      if (baseUrl !== '' && !baseUrl.startsWith('http')) {
        baseUrl = `${debug ? 'http' : 'https'}://${baseUrl}`;
      }
      return baseUrl + path;
    }
    return path;
  }
}
