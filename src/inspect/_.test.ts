import { inspect } from "./index";

describe("inspect unit testing", () => {
  const obj = {
    foo: "bar",
    baz: true,
    laz: 2,
    mix: undefined,
    tes: Symbol("test"),
    cos: () => {},
  };
  test("plain object",()=>{
    const msg = inspect(obj);
    console.log(msg);
    expect(msg).not.toBeUndefined();
  });
  test("nested object",()=>{
    const msg = inspect({...obj, obj});
    console.log(msg);
    expect(msg).not.toBeUndefined();
  });
});
