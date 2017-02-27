

export function setUpperBits(field : number, value : number) : number {
    value = value | 0;
    if(value > 0xFFFF) value = 0xFFFF;
    return field;
}