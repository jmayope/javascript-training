
// function add(a, b) {
//   return a + b;
// }

// codigo pythonico

add = (a,b) => a + b;

addTwoToItem = (list) => list.map(a => add(a,2));

ofNumberToObject = (list) => list.map((a, i) => { return {name: "Persona "+ i + " en 3 años", age:add(a,3) }});

console.log(add(3,2));
let listOne = [1,2,3,4,5,6];
let listDouble = addTwoToItem(listOne);
let listPersons = ofNumberToObject(listDouble);

console.log(listOne);
console.log(listDouble);
console.log(listPersons);

addThreeValues = (a, b, c) => {
  let result = a + b;
  if (a < b) {
    result = a + c;
    return result;
  }
  result += 2;
  return result;
}

console.log(addThreeValues(3,2,6));
console.log(addThreeValues(3,5,6));

let array = [1,2,3,4,5,6];
let doubleArray = array.map(a => a*2);

console.log(array);
console.log(doubleArray);

// Fibbonacci
fib = (n) => {
  if (n < 0) return null;
  else if (n == 0) return 0;
  else if (n == 1) return 1;
  else return fib(n-1) + fib(n-2);
}
let numbers = [];
console.log(fib(40));

for (let index = 1; index <= 40; index++) {
  numbers.push(fib(index));
}

console.log(numbers);
1,1,2,3,5,8