enum Gender {
  MALE,
  FEMALE,
  OTHERS,
}

type PersonType = {
  name: string;
  age: number;
  hobbies: string[];
  role: [string, number, boolean];
};

const person: PersonType = {
  name: "falade",
  age: 26,
  hobbies: ["movies", "sleeping", "music"],
  role: ["tuple", 2, true],
};

let something: string[];
something = ["omo", "guy"];

let anythingArray: any[];
anythingArray = [true, 100, "free"];

console.log(person);
console.log(Gender);
