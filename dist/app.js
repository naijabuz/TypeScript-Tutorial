"use strict";
class Department {
    constructor(m, n, o, p) {
        this.title = m;
        this.name = n;
        this.gender = o;
        this.age = p;
    }
}
const procurement = new Department("Procurement", "Esther", "Female", 30);
console.log(procurement);
