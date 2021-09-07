import { inspect } from "./index";

describe("plain objects", () => {
  const obj = {
    foo: "bar",
    baz: true,
    laz: 2,
    mix: undefined,
    tes: Symbol("test"),
    cos: () => {},
  };
  test("no nesting", () => {
    const msg = inspect(obj);
    console.log(msg);
    expect(msg).not.toBeUndefined();
  });
  test("nested object", () => {
    const msg = inspect({ ...obj, obj });
    console.log(msg);
    expect(msg).not.toBeUndefined();
  });
});

describe("classes", () => {
  class Simple {
    field1: string = "a";
    field2: number = 3;
    field3: boolean = false;
  }

  test("simple class", ()=>{
    const instance = new Simple();
    const msg = inspect(instance);
    console.log(msg);
    expect(msg).not.toBeUndefined();
  })
});
