function convertToRoman(n) {
    if (typeof n !== 'number' || isNaN(n) || !Number.isInteger(n)) {
        throw new TypeError('Input must be an integer');
    }
    if (n < 1 || n > 3999) {
        throw new RangeError('Input must be between 1 and 3999');
    }

    const table = [
        [1000, 'M'],  [900, 'CM'], [500, 'D'],  [400, 'CD'],
        [100,  'C'],  [90,  'XC'], [50,  'L'],  [40,  'XL'],
        [10,   'X'],  [9,   'IX'], [5,   'V'],  [4,   'IV'],
        [1,    'I']
    ];

    let result = '';
    for (const [value, symbol] of table) {
        while (n >= value) {
            result += symbol;
            n -= value;
        }
    }
    return result;
}
