import { cartUrl } from 'src/app/config/api';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from '../models/cart-item';
import { Observable } from 'rxjs'
import { Item } from '../models/item';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    //mapping the obtained result
    //@pipe()
    //@map()
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let element of result) {
          let itemExist = false
          for (let i in cartItems) {
            if (cartItems[i].itemId == element._id) {
              cartItems[i].qty++
              itemExist = true
              break
            }
          }
          if (!itemExist) {

            cartItems.push(new CartItem(element._id, element.title, element.price, element.image))
          }
        }
        return result;
      })
    )
  }

  addItemToCart(item: Item): Observable<any> {
    return this.http.post(cartUrl, { item })
  }
}
