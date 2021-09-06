export interface Constructor {
  new (...args: any[]): any;
}

export type Function<T> = (...args: any) => T;

export type logger = (v: string) => void | Promise<void>;
