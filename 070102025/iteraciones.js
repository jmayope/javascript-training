let floors = 10;
let ages = [1,2,3,4,5,6,7,8];
// FOR
for (let index = 0; index < ages.length; index++) {
  console.log("Edad " + (index+1));
}

ages.forEach(a => {
  console.log(a);
});
// while
let count = 0;
while (count < ages.length) {
  console.log("Edad " + (count+1));
  count++;
}
