class People {
constructor(name) {
      this.name = name;
    }
    get Name() {
      return this.name;
    }
    set Name(name) {
      this.name = name;
    }
}
let person = new People("Jon Snow");
console.log(person.Name);
person.Name = "Dany";
console.log(person.Name);

var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const wahrheit = true;
const liege = false;

switch (wahrheit) {
  case true: console.log('yes'); break;
  case false: console.log('yes'); break;
  default: break;
}
// Deploy a website
