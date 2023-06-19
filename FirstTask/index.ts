type TObj = { key1: number };
const a: TObj = { key1: 0 };
const keys = ["key2"] as const;

type Keys = (typeof keys)[number];

const indexedA: TObj[Keys] = a[keys];