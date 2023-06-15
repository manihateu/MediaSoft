type TObj = { key1: number };
const a: TObj = { key1: 0 };
const keys = ["key2"] as const;

type Keys = typeof keys[number];
type IndexedObj = { [key in Keys]: number };

const indexedA: IndexedObj = a; // Присваиваем `a` переменной с индексным типом
console.log(indexedA[keys[0]]); // Теперь TypeScript ругается, так как ключ `key2` отсутствует в типе IndexedObj
