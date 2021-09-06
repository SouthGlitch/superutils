export interface Constructor {
	new (...args: any[]): any;
}

export type Function<T> = (...args: any) => T;
