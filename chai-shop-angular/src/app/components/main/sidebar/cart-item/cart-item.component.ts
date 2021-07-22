import { Component, Input, OnInit } from '@angular/core';

import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  cartItems: Array<any> = [];

  cartTotal = 0

  serverUrlImagesPath: string = 'http://localhost:3000/img/';

  @Input() cartItem: any

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  deleteOnClick(event: any) {

    const thisButton = event.target;
    thisButton.classList.add('btn-danger');

    this.cartService.deleteItemFromCart(this.cartItem).subscribe(() => {
      this.msg.sendMsg(this.cartItem)
    })
  }

}
