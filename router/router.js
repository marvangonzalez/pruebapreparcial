import express from "express";
import Controladoooooo from "../controlador/controlador.js";

class RouterServicios {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controladoooooo()
    }

    start () {
        this.router.get('/', this.controlador.hora)
        this.router.post('/colores', this.controlador.agregarColor)
        this.router.get('/colores', this.controlador.getColores)
        

        return this.router
    }
}


export default RouterServicios