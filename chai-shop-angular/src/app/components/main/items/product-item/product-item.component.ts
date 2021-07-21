import { Component, OnInit, Input } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  serverUrlImagesPath: string = 'http://localhost:3000/img/';

  @Input() productItem: any;
  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.cartService.addItemToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }
}
