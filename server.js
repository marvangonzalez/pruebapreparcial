import express from 'express'
import RouterServicios from './router/router.js'

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/parcial/numeros', new RouterServicios().start())

const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
