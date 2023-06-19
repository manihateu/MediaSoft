type TObj = { key1: number };
const a: TObj = { key1: 0 };
const keys: Array<keyof TObj> = ["key2"];

console.log(a[keys[0]]); 