//import { faker } from '@faker-js/faker/locale/es'     // español
import { faker } from '@faker-js/faker/locale/en'

const get = _ => ({
  color: faker.commerce.product()
})

//console.log(get())

export default {
    get
}