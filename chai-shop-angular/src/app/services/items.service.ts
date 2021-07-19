import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item'
@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  serverUrl: string = 'http://localhost:3000/';
  itemsPath: string = 'items/';


  items: Item[] = [];

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<Item[]>(this.serverUrl + this.itemsPath);
  }
}