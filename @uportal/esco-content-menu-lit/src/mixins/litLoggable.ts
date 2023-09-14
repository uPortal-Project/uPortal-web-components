import { LitElement } from 'lit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T> = new (...args: any[]) => T;

export declare class LoggableInterface {
  setLogBundle(bundle: string): void;
  setLogModule(module: string): void;
  setLogIdentifier(identifier: string): void;
  setLogLevel(level: 0 | 1 | 2 | 3): void;
  errorLog(message: string, ...paramaters: unknown[]): void;
  messageLog(message: string, ...paramaters: unknown[]): void;
  debugLog(message: string, ...paramaters: unknown[]): void;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const LitLoggable = <T extends Constructor<LitElement>>(
  superClass: T
) => {
  class LoggableElement extends superClass {
    private static _bundle = 'unknown';
    private _module = 'unknown';
    private _identifier: string | null = null;
    private static _globalLevel = 1;
    private _localLevel = 1;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args);
      LoggableElement._bundle = process.env.LOGBUNDLE ?? 'unknown';
      LoggableElement._globalLevel = parseInt(process.env.LOGLEVEL ?? '1') ?? 1;
      this._module = this.constructor.name;
    }

    setLogBundle(bundle: string): void {
      if (LoggableElement._bundle === 'unknown')
        LoggableElement._bundle = bundle;
    }

    setLogModule(module: string): void {
      this._module = module;
    }

    setLogIdentifier(identifier: string): void {
      this._identifier = identifier;
    }

    setLogLevel(level: 0 | 1 | 2 | 3): void {
      this._localLevel = level;
    }

    private getLogLevel(): number {
      return Math.max(LoggableElement._globalLevel, this._localLevel);
    }

    private handleLog(
      type: 'error' | 'log' | 'debug',
      message: string,
      ...paramaters: unknown[]
    ): void {
      const level = this.getLogLevel();
      const logMessage = `%c[${LoggableElement._bundle}][${this._module}] ${
        this._identifier ? this._identifier + ' >' : ''
      } ${message}`;
      switch (type) {
        case 'error':
          if (level > 0) {
            console.error(
              logMessage,
              'display: inline-block; background-color:#EBD3D3; color: #c80000;font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;',
              ...paramaters
            );
          }
          break;
        case 'log':
          if (level > 1) {
            console.log(
              logMessage,
              'display: inline-block; background-color:#CFDAE6; color: #004999;font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;',
              ...paramaters
            );
          }

          break;
        case 'debug':
          if (level > 2) {
            console.debug(
              logMessage,
              'display: inline-block; background-color:#D9D9D9; color: #6c6c6c;font-weight: bold ; padding: 3px 7px 3px 7px ; border-radius: 3px 3px 3px 3px ;',
              ...paramaters
            );
          }
          break;
      }
    }
    errorLog(message: string, ...paramaters: unknown[]): void {
      this.handleLog('error', message, ...paramaters);
    }
    messageLog(message: string, ...paramaters: unknown[]): void {
      this.handleLog('log', message, ...paramaters);
    }
    debugLog(message: string, ...paramaters: unknown[]): void {
      this.handleLog('debug', message, ...paramaters);
    }
  }
  return LoggableElement as Constructor<LoggableInterface> & T;
};
