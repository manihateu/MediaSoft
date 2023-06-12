//type TObj = { key1: number };
//const a: TObj = { key1: 0 };
//const keys = ["key2"];
//console.log(a[keys[0]]); // Получаем undefined - нужно что бы не могли
// и ругался TS

//Решение
type TObj = { key1: number };
const a: TObj = { key1: 0 };
const keys = ["key2"];
console.log(a[keys[0] as keyof TObj]);