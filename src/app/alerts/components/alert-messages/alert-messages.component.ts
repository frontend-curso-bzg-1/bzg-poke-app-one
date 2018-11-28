import { Component, OnInit } from '@angular/core';
import { IMessage } from "../../models/interfaces/message";
import { MessagesService } from "../../services/messages.service";

@Component({
  selector: 'app-alert-messages',
  templateUrl: './alert-messages.component.html',
  styleUrls: ['./alert-messages.component.css']
})
export class AlertMessagesComponent implements OnInit {

  message: IMessage;
  classType: string;

  constructor(private msgService: MessagesService) { }

  ngOnInit() {
    this.msgService.getMessage()
      .subscribe(
        (msg: IMessage) => {
          this.message = msg;
          switch (this.message.type) {
            case 'success': this.classType = 'alert-success';
              break;
            case 'error': this.classType = 'alert-danger';
              break;
            default: break;
          }
        }
      );
  }

}
