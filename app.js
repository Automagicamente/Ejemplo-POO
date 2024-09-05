const Persona = require("./Persona");

const persona1 = new Persona("Esteban");
const persona2 = new Persona("Diego");
const persona3 = new Persona("Rocio");

persona2.agregarConocido(persona1);
persona2.agregarConocido(persona3);

persona2.verA(persona3);