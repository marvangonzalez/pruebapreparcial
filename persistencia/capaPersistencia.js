class Persistencia {
    constructor () {
        this.datos = [{ id: 1, color: "rojo"},
        { id: 2, color: "azul"},
        { id: 3, color: "verde"}
            ]
    }

    obtenerDatos = () => {
        return this.datos
    }

    principal = () => {
        return "Bienvenido"
    }

    hora = () => {
        const currentHour = new Date().getHours();
        let msj

    if (currentHour >= 6 && currentHour < 12) {
        msj= 'Buenos días!';
    } else if (currentHour >= 12 && currentHour < 20) {
        msj= 'Buenas tardes!';
    } else {
        msj= 'Buenas noches!';
    }
        return msj

    }

    agregarColor = color => {
        
        console.log("string" , color)
        let dato = {
            id: this.datos.length,
            color: color
        }
        this.datos.push(dato)

        return dato
    }


}

export default Persistencia