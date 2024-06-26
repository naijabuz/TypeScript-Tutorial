function add(
  number1: number,
  number2: number,
  showResult: boolean,
  resultText: string
) {
  const result = number1 + number2;
  if (showResult) {
    console.log(resultText + result);
  } else {
    return number1 + number2;
  }
}

const n1 = 5;
const n2 = 6;
const showResult = true;
const resultText = "The result is: ";

add(n1, n2, showResult, resultText);

// REST OPERATOR

const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = { ...person };

const adding = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const nrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, c, ...newNrs] = nrs;

const addedNumbers = adding(5, 10, 4, 5, 6);
console.log(addedNumbers);
console.log(a, b, c, newNrs, nrs);
