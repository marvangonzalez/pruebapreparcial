import express from "express";
import Controladoooooo from "../controlador/controlador.js";

class RouterServicios {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controladoooooo()
    }

    start () {
        this.router.get('/:numero', this.controlador.agregarPalabra)
        this.router.get('/entrada', this.controlador.getNumeros)

        return this.router
    }
}


export default RouterServicios