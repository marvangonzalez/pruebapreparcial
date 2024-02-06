import Servicio from "../servicio/servicio.js"


class Controladoooooo {
    constructor() {
        this.servicio = new Servicio()
    }

    agregarColor = (req, res) => {
        console.log("Strinasdasg", req.body)
        const { color } = req.body
        const resultado = this.servicio.agregarColor(color)
        res.json(resultado)
    }

    getColores = (req, res) => {
        const colores = this.servicio.obtenerString()
        res.json({colores})
    }

    principal = (req, res) => {
        res.json(this.servicio.principal())
    }

    hora = (req, res) => {
        res.json(this.servicio.hora())
    }

}

export default Controladoooooo