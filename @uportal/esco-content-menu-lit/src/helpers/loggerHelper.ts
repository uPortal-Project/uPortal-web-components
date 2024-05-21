export default class LoggerHelper {
  private static bundle = 'default';
  /**
   * 1 : error
   * 2 : log
   * 3 : debug
   */
  private static level: 1 | 2 | 3 = 3;

  static setBundle(bundle: string): void {
    if (this.bundle === 'default') this.bundle = bundle;
  }

  static setLevel(level: 1 | 2 | 3): void {
    this.level = level;
  }

  private static handle(
    type: 'error' | 'log' | 'debug',
    module: string,
    message: string,
    ...paramaters: unknown[]
  ): void {
    switch (type) {
      case 'error':
        console.error(`[${this.bundle}][${module}] ${message}`, ...paramaters);
        break;
      case 'log':
        if (this.level > 1) {
          console.log(`[${this.bundle}][${module}] ${message}`, ...paramaters);
        }

        break;
      case 'debug':
        if (this.level > 2) {
          console.debug(
            `[${this.bundle}][${module}] ${message}`,
            ...paramaters
          );
        }
        break;
    }
  }
  static error(
    module: string,
    message: string,
    ...paramaters: unknown[]
  ): void {
    this.handle('error', module, message, ...paramaters);
  }
  static log(module: string, message: string, ...paramaters: unknown[]): void {
    this.handle('log', module, message, ...paramaters);
  }
  static debug(
    module: string,
    message: string,
    ...paramaters: unknown[]
  ): void {
    this.handle('debug', module, message, ...paramaters);
  }
}
