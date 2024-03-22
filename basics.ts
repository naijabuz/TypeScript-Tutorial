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
