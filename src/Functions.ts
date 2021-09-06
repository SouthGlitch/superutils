// import { readFile, readFileSync } from "fs";
// /**
//  * @param path to the config json file
//  * @returns raw json config
//  */
// export function readJson(path: string) {
// 	return new Promise((resolves, rejects) => {
// 		readFile(
// 			`${path}`,
// 			{
// 				encoding: "utf8"
// 			},
// 			(err, data) => {
// 				if (err) {
// 					return rejects(err);
// 				}
// 				return resolves(JSON.parse(data));
// 			}
// 		);
// 	});
// }
// export function readJsonSync(path) {
// 	return JSON.parse(
// 		readFileSync(`${path}`, { encoding: "utf8" })
// 	);
// }

type message_parser<T> = (v: T) => string;
type parserHash = {
  [name: string]: message_parser<any>;
};
const parserFunctions: parserHash = {
  boolean: (v: boolean) => "(boolean)" + String(v),
  number: (v: number) => "(number)"+ String(v),
  string: (v: string) => "(number)"+v,
  undefined: (v: undefined) => "(undefined)",
  symbol: (v: symbol) => "(symbol)",
  function: (v: Function) => "(function)",
  object: (v: object) => "\n\t"+inspect(v)
};

function inspect(item: any): string {
  let message = "";
  for (const key in item) {
    const key_value = item[key];
	message += `${key}: ${parserFunctions[typeof key_value]}\n`;
  }
  return message;
}

function test(){
	const test = {
		foo: "bar",
		baz: true,
		laz: 2,
		mix: undefined,
		tes: Symbol("test"),
		cos: () => {},
	}
	console.log(inspect(test));
}