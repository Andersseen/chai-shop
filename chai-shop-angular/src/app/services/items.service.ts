import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item'

import { itemsUrl } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: Item[] = [];

  constructor(private http: HttpClient) { }

  getItems() {

    return this.http.get<Item[]>(itemsUrl);
  }
}