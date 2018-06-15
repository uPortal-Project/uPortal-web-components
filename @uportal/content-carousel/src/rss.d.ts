declare module 'rss-to-json' {
    export function parser(json: any): any;
    export function load(path: string, callback: Function): any;
    export function read(path: string, callback: Function): any;
}
