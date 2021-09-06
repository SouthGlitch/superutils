import { Function } from "./Types";
export declare function lazyLoader<T>(initializer: Function<T>): () => T;
