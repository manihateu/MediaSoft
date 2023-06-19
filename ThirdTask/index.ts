type TApiResponse = {
    a?: number;
    b?: number;
    c?: number;
    };
// нужно сделать тип TReqResponse от
// TApiResponse с полями {a?: number, b: number, c: number}
type TReqResponse = Required<Pick<TApiResponse, 'b' | 'c'>> & Omit<TApiResponse, 'b' | 'c'>;
