export default class pathHelper {
  static getUrl(path: string): string {
    if (!path.startsWith('http')) {
      return process.env.VUE_APP_PORTAL_BASE_URL ?? '' + path;
    }
    return path;
  }
}
