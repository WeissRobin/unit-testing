const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./testing');

it('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
});

it('reverseString', () => {
    expect(reverseString('World')).toBe('dlroW');
});

it('calculatorAdd', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

it('calculatorSub', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
})

it('calculatorMul', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
})

it('calculatorDiv', () => {
    expect(calculator.divide(4, 2)).toBe(2);
})

it('cipher test no.1', () => {
    expect(caesarCipher('z', 5)).toBe('e');
})

it('cipher test no.2', () => {
    expect(caesarCipher('a', -3)).toBe('x');
})

it('cipher test no.3', () => {
    expect(caesarCipher(' ', -3)).toBe(' ');
})

it('cipher test no.4', () => {
    expect(caesarCipher('a')).toBe('a');
})

it('cipher test no.5', () => {
    expect(caesarCipher('A')).toBe('A');
})

it('cipher test no.5', () => {
    expect(caesarCipher('0 a', 1)).toBe('0 b');
})

it('analyzeArray test no.1', () => {
    expect(analyzeArray([1,2,3])).toEqual({ average: 2, min: 1, max: 3, length: 3 });
})