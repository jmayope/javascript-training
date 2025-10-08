// OBJETOS
let roles = ["Admin", "Boss", "Recolector"];
let person = {
  name: "Juan",
  lastName: undefined,
  gender: true,
  birthDate: Date.now(),
  roles: roles,
  info: {
    phone: "+519868454855",
    address: "Av. Sla sad usdasd 12323--232"
  }
};

console.log(Object.keys(person));
console.log(Object.values(person));

console.log(Object.keys(person).includes("lastName") ? "Si hay apellido" : "NO HAY APELLIDO!!!"); 

person.abc = "comida";
person["abc"] = "comida 111";
person.info.abc = "Chaufa";
person.info.email = {
  work: "sadasd@work.com",
  home: "sdafsadf@home-.com",
  coffee: "asdasda@coffe.com"
};

console.log(person);