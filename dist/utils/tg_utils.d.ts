/**
 * 监听 window.location.href 直到包含 '#tgWebAppData='，然后调用 decodeTgWebAppDataFromUrl 函数。
 */
export declare function monitorTgWebAppData(): void;
export declare const decodeTgWebAppDataFromUrl: () => {};
export declare const getTgWebAppData: () => any;
/**
 * 监听 window.location.search 直到包含 'tgWebAppStartParam' 参数，
 * 然后将其存储到 localStorage
 */
export declare function monitorTgWebAppStartParam(): void;
export declare const getTgWebAppStartParam: () => string;
export declare function monitorUtmContentParam(): void;
