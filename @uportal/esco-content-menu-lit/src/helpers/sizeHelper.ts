export default class sizeHelper {
  static validate(
    size: string,
    withAuto: boolean,
    withCustom: boolean
  ): boolean {
    let options = ['large', 'medium', 'small', 'smaller'];
    if (withAuto) {
      options = [...options, 'auto'];
    }
    if (withCustom) {
      options = [...options, 'custom'];
    }
    return options.includes(size);
  }

  static breakPointName(size: number): string {
    if (typeof size === 'number' && isFinite(size)) {
      if (size < 480) {
        return 'smaller';
      } else if (size < 768) {
        return 'small';
      } else if (size < 1680) {
        return 'medium';
      }
    }
    return 'large';
  }

  static elementWidth(element: HTMLElement | null | undefined): number {
    return element?.clientWidth ?? 0;
  }
}
