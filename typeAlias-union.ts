type TwoTypes = number | string;

function combine(input1: TwoTypes, input2: TwoTypes) {
  let result: TwoTypes;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(20, 41);
const combinedNames = combine("Falade", "Yusuf");

console.log(combinedAges);
console.log(combinedNames);
