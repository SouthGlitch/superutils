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

export {inspect} from "./inspect"