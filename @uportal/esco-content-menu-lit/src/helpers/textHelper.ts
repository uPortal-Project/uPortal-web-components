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
    return str
      .split(/[\s,']+/)
      .map((word) => {
        return word.length >= 4 || word != word.toLowerCase()
          ? word.split('')[0].toUpperCase()
          : '';
      })
      .join('');
  }

  static hashCode(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      hash = (hash << 5) - hash + code;
      hash = hash & hash;
    }
    return hash.toString();
  }
}
