const Conocido = require("./Conocido");

class Persona{
    #nombre="def nombre"
    #conocidos=[];
    
    constructor(nombre){
        this.#nombre = nombre;
        this.#conocidos.push(new Conocido(this));
    }

    getNombre(){
        return this.#nombre;
    }

    /**
     * Imprime un saludo personalizado
     */
    saludarA(unaPersona){
        console.log("Soy "+ this.#nombre);
        
        console.log("Hola! "+ unaPersona.getNombre());
    }

    /**
     * Ver a una persona
     * @param {Persona} unaPersona a ver
     */
    verA(unaPersona){
        let resultadoReconocer = this.#conocidos.some((conocido)=>{
            return conocido.sos(unaPersona);
        })
        if (resultadoReconocer) {
            this.saludarA(unaPersona);
        }else{
            console.log("Sigo de largo");
            
        }
    }

    /**
     * Agrega una persona al grupo de conocidos
     * @param {Persona} unaPersona a conocer
     */
    agregarConocido(unaPersona){
        this.#conocidos.push(new Conocido(unaPersona));
    }

}

module.exports = Persona;