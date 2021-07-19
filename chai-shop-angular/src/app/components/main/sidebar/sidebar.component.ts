import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  cartItems = [
    {
      id: 1,
      itemTitle: 'Title',
      qty: 2,
      price: 10
    },
    {
      id: 2,
      itemTitle: 'Title second',
      qty: 1,
      price: 15
    }
  ];

  cartTotal = 0

  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
