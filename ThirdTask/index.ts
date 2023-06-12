type TApiResponse = {
    a?: number;
    b?: number;
    c?: number;
    };
// нужно сделать тип TReqResponse от
// TApiResponse с полями {a?: number, b: number, c: number}
// юзану mapped тайп
type TReqResponse = {
    [K in keyof TApiResponse]-?: K extends 'b' ? number : K extends 'c' ? number : TApiResponse[K];
}

    