export interface Constructor {
    new (...args: any[]): any;
}
export declare type Function<T> = (...args: any) => T;
export declare type logger = (v: string) => void | Promise<void>;
