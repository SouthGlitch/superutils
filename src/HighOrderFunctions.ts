import { isNullOrUndefined } from "./Guards";
import {Function} from "./Types";

/**
 * This creates a singleton getter. Usefull for avoid memory leaks. Can help with dependency injection
 * @param initializer function that instatiates the object the first time.
 * @returns a lazy getter
 */
export function lazyLoader<T>(initializer: Function<T>) {
    let element: T | undefined;
    return function lazyGet (): T {
        if (isNullOrUndefined(element)) {
            element = initializer();
        }
        return element;
    };
}
