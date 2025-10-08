// IF ELSE
// SWITCH

let age = 14;
let result = "Eres menor de edad";
if (age > 18) {
  result = "Eres mayor de edad";
}

console.log(result);
switch (true) {
  case age <= 12:
    result = "Estas a salvo";
    break;
  case age <= 15:
    result = "Estas a 3 años de ir a la carcel";
    break;
  case age <= 17:
    result = "Estas a 1 año de ir a la carcel";
    break;
  default:
    result = "Vive recien naciste";
    break;
}

console.log(result);