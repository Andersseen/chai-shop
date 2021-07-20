import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(item: any) {
    this.subject.next(item)
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
