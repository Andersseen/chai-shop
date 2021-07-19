import { Component, OnInit } from '@angular/core';

import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(public itemsService: ItemsService) { }

  serverUrlImagesPath: string = 'http://localhost:3000/img/';

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.itemsService.getItems().subscribe(
      res => {
        this.itemsService.items = res;
      },
      err => console.error(err)
    )
  }
}
