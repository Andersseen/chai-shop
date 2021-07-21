import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(item: Item) {
    this.subject.next(item)
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
