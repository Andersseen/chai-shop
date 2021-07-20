import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  serverUrlImagesPath: string = 'http://localhost:3000/img/';

  @Input() cartItem: any

  constructor() { }

  ngOnInit(): void {
  }

}
