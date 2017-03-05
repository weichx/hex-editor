

export function setUpperBits(field : number, value : number) : number {
    value = value | 0;
    if(value > 0xFFFF) value = 0xFFFF;
    return field;
}


export function getBits(value : number, offset : number, bitCount : number) : number {
    return (value >> offset) & (1 << bitCount) - 1;
}

//todo -- untested
function getMask(start :number, end : number) : number {
    return (~0 >> (32 - start - 1)) & (~0 << (32 - end))
}

export function set1stByte(target : number, value : number) {
    return (target & 0xffffff00) | (value & 0x000000ff);
}

export function setBytes(target : number, value : number, byteCount : number, offset : number) : number {
    // int x = (number >> (8*n)) & 0xff;
    return (target & 0xff000000) | (value & 0x00ffffff)
}

export function getNthByte(value : number, byteNumber : number) : number {
    return (value >> (8* byteNumber)) & 0xff;
}

//todo -- untested
export function setBits(target : number, value : number, offset : number, bitCount : number) : number {
    var mask = getMask(0, bitCount);
    return (target & ~mask) | (value & mask);
}

export function setHighLowBits(high : number, low : number) : number {
    return (high << 16) | (low & 0xffff);
}

export function getLow16Bits(value : number) : number {
    return value & 0xFFFF;
}

export function getHigh16Bits(value : number) : number {
    return (value >> 16) & ( 1 << 16) - 1;
}