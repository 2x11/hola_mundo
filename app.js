//patron prototipo: toma un objeto ya definido y en base a ello genera prototipos para otros objetos. Me ahorra la duplicidad de codigo.
const saludo = {
    nombre: 'Dai',
    metodo: function () {
        console.log (`Hola Mundo, soy ${this.nombre}`)
    }
}

const persona = Object.create(saludo); //crea nuevo objeto, el argumento será el prototipo que va a utilizar el objeto saludo

persona.metodo()
persona.nombre = 'estudiante de programacion',  //cambio la propiedad del mismo objeto.
persona.metodo()
