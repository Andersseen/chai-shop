import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  serverUrlImagesPath: string = 'http://localhost:3000/img/';

  @Input() productItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
