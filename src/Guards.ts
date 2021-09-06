export function isNull(arg: any | null): arg is null {
  return arg === null;
}

export function isUndefined(arg: any | undefined): arg is undefined {
  return arg === undefined;
}

export function isNullOrUndefined(
  arg: any | undefined | null
): arg is undefined | null {
  return isNull(arg) || isUndefined(arg);
}

export function isSymbol(arg: any): arg is symbol {
  return typeof arg === "symbol";
}

export function isObject(arg: any): arg is Object {
  return arg instanceof Object;
}
