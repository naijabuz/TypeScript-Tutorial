class Department {
  title: string;
  name: string;
  gender: string;
  age: number;

  constructor(m: string, n: string, o: string, p: number) {
    this.title = m;
    this.name = n;
    this.gender = o;
    this.age = p;
  }
}

const procurement = new Department("Procurement", "Esther", "Female", 30);

console.log(procurement);
