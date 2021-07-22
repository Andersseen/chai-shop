import { environment } from 'src/environments/environment'

export const apiUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'

export const itemsUrl = apiUrl + '/items'
export const cartUrl = apiUrl + '/cart'
export const cartItemUrl = apiUrl + '/cart/item'