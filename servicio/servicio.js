import Persistencia from "../persistencia/capaPersistencia.js";

class Servicio {
    constructor() {
        this.persistencia = new Persistencia()
    }

    obtenerString() {
        const colores = this.persistencia.obtenerDatos()
        const arrayColores= colores.map((obj) => obj.color);
        return arrayColores
    }

    principal (){
        let a= this.persistencia.principal()
        return a
    }

    hora (){
        let msj= this.persistencia.hora()
        return msj
    }

    agregarColor(color) {
        var res = this.persistencia.agregarColor(color)
        return res
    }
}

export default Servicio