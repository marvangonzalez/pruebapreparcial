import Servicio from "../servicio/servicio.js"


class Controladoooooo {
    constructor() {
        this.servicio = new Servicio()
    }

    agregarPalabra = (req, res) => {
        const { palabra } = req.params
        const resultado = this.servicio.agregarPalabra(palabra)
        res.json(resultado)
    }

    getNumeros = (req, res) => {
        res.json(this.servicio.obtenerString())
    }


}

export default Controladoooooo