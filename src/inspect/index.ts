type message_parser<T> = (v: T) => string;
type parserHash = {
  [name: string]: message_parser<any>;
};
const parserFunctions: parserHash = {
  boolean: (v: boolean) => "(boolean)   " + String(v),
  number: (v: number) => "(number)    " + String(v),
  string: (v: string) => "(number)    " + v,
  undefined: (v: undefined) => "(undefined) ",
  symbol: (v: symbol) => "(symbol)    ",
  function: (v: Function) => "(function)  ",
  object: (v: object) => inspect(v, "\t"),
};

export function inspect(item: any, prefix = ""): string {
  let message = "\n";
  for (const key in item) {
    const key_value = item[key];
    message += `${prefix}${key}: ${parserFunctions[typeof key_value](
      key_value
    )}\n`;
  }
  return message;
}
