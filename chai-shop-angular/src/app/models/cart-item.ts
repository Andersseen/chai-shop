// import { Item } from './item'
export class CartItem {

    itemId: string
    itemPrice: number
    itemTitle: string
    itemImage: string


    qty: number

    // constructor(id: string, item: Item, qty = 1) {
    //     this.id = id

    //     this.itemPrice = item.price
    //     this.itemTitle = item.title
    //     this.itemImage = item.image
    //     this.itemId = item._id

    //     this.qty = qty

    // }
    constructor(id: string, price: number, title: string, image: string, qty = 1) {

        this.itemId = id

        this.itemPrice = price
        this.itemTitle = title
        this.itemImage = image

        this.qty = qty

    }

}