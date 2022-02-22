export default class textHelper {
  static truncate(string: string): string {
    if (string) {
      const text = string.split('   ');
      return text[0].trim();
    }
    return string;
  }
  static sanitize(string: string): string {
    if (string) {
      string = string.replace(/[^a-z0-9]/gim, '_');
      return string.trim();
    }
    return string;
  }

  static getAcronym(str: string): string {
    return (
      str
        .match(/\b(\w)/g)
        ?.join('')
        .toUpperCase() ?? ''
    );
  }
}
