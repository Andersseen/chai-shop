import { Component, OnInit } from '@angular/core';

import { MessengerService } from 'src/app/services/messenger.service'
import { Item } from './../../../models/item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  cartItems: Array<any> = [];

  cartTotal = 0

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((item: any) => {
      this.addItemToCart(item)
    })
  }


  addItemToCart(item: Item) {
    let itemExist = false
    for (let i in this.cartItems) {
      if (this.cartItems[i].id == item._id) {
        this.cartItems[i].qty++
        itemExist = true
        break
      }
    }
    if (!itemExist) {
      this.cartItems.push({
        id: item._id,
        itemTitle: item.title,
        imageUrl: item.image,
        qty: 1,
        price: item.price,
      })
    }
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
}
