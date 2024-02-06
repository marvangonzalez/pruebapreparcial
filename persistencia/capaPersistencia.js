class Persistencia {
    constructor () {
        this.datos = [
                { id: 1, palabra: "Hola", timestamp: 1624450180112 },
                { id: 2, palabra: "que", timestamp: 1624450189685 },
                { id: 3, palabra: "tal", timestamp: 1624450195068 }
            ]
    }

    obtenerDatos = () => {
        return this.datos

    }

    agregarPalabra = palabra => {
        let dato = {
            id: this.datos.length,
            palabra: palabra,
            timestamp: Date.now()
        }
        this.datos.push(dato)

        return dato
    }


}

export default Persistencia