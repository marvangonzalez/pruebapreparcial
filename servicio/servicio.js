import Persistencia from "../persistencia/capaPersistencia.js";

class Servicio {
    constructor() {
        this.peristencia = new Persistencia()
    }

    obtenerString() {
        let datos = this.peristencia.obtenerDatos()
        let res = ""
        
        datos.map((dato) => {
            res += dato.palabra
            res += " "
        })

        return res
    }

    agregarPalabra(palabra) {
        var res = this.peristencia.agregarPalabra(palabra)
        return res
    }
}

export default Servicio