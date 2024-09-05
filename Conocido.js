const Persona = require("./Persona");

class Conocido{
    #persona = "def persona";
    #deQuien = " def de quien";
    #desagradable = "def true false"

    constructor(unaPersona){
        this.#persona = unaPersona
    }
    
    /**
     * Identifica a una persona
     * @param {Persona} unaPersona a identificar
     * @returns true si es un conocido, false caso contrario
     */
    sos(unaPersona){
        return unaPersona === this.#persona;
    }
}

module.exports = Conocido;