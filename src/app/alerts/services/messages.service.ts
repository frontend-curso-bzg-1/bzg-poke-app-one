import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { IMessage } from '../models/interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private subject = new Subject<any>();

  constructor() { }

  message(msg : IMessage){
    this.subject.next(msg);
  }

  getMessage() : Observable<IMessage> {
    return this.subject.asObservable();
  }
}
