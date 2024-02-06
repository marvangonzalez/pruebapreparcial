import { expect } from "chai"
import supertest from "supertest"
import generador from './generador/producto.js'

const request = supertest('http://127.0.0.1:8080')

describe('test apirestful', () => {
    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            const reponse = await request.get('/parcial/numeros')
            expect(reponse.status).to.eql(200)
        })
    })

    describe('POST', () => {
        it('debería incorporar un color', async () => {
            const color = generador.get()
            console.log(color)

            const response = await request.post('/parcial/numeros/colores').send( color )
            expect(response.status).to.eql(200)

            
            const colorGuardado = response.body
            console.log(colorGuardado)

            expect(colorGuardado).to.include.keys('color')

            expect(colorGuardado.color).to.eql(color.color)
        })
    })
})