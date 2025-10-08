let ages = [12,15,19,50,-25,1,2,5,215];

let speeds = [25,85,15,115,11,1561];

// 4 item - arrays comienzan en 0;
console.log(ages[3]);

//  OPERACIONES tenemos

console.log(ages.length);
console.log(ages.join("\n"));

console.log(ages.map(a => {return {name: "Juan", age: a}}));

console.log(ages.every(a => a > 0));

console.log(ages.sort());

// minimo valor de un array
console.log(ages.sort()[0]);
console.log(Math.min(...ages));
console.log(ages.sort()[ages.length - 1])
console.log(Math.max(...ages));

