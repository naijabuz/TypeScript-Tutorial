// INTERSECTION TYPES

type Starter = {
  name: string;
  age: number;
  married: boolean;
  benefits: string[];
};

type Employee = {
  name: string;
  house: boolean;
  date: Date;
};

type SeniorEmployee = Starter & Employee;

const staff: SeniorEmployee = {
  name: "Adeleke Joel",
  age: 27,
  married: true,
  benefits: ["hospital", "travel"],
  house: true,
  date: new Date(),
};

console.log(staff);

type unionTypeOne = string | number | boolean;
type unionTypeTwo = string | Date | boolean;

type intersectedVariable = unionTypeOne & unionTypeTwo;

// TYPE GUARDS
// using typeof

function add(a: unionTypeOne, b: unionTypeOne) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else if (typeof a === "number" || typeof b === "number") {
    return Number(a) + Number(b);
  } else {
    return a + " " + b;
  }
}

const funcExe = add(200, 300);

console.log(funcExe);

type unknownEmployee = Starter | Employee;

function printStaffInfo(emp: unknownEmployee) {
  console.log("Name: ", emp.name);
  if ("benefits" in emp) {
    console.log("Benefits: ", emp.benefits);
  }
  if ("married" in emp) {
    console.log("Marital Status: ", emp.married);
  }
}

printStaffInfo(staff);
