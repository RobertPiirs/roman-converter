const convertToRoman = (num) => {
  const map = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let result = "";
  for (let i = 0; i < map.length; i++) {
    while (num >= map[i].value) {
      result += map[i].numeral;
      num -= map[i].value;
    }
  }
  return result;
};

test("Convert 1 to I", () => {
  expect(convertToRoman(1)).toBe("I");
});

test("Convert 4 to IV", () => {
  expect(convertToRoman(4)).toBe("IV");
});

test("Convert 9 to IX", () => {
  expect(convertToRoman(9)).toBe("IX");
});
