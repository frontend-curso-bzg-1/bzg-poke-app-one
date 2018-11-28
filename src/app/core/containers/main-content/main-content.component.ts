import { Component, OnInit, Input } from '@angular/core';
import { MessagesService } from "../../../alerts/services/messages.service";
import { books } from "../../../books";
import { IMessage } from 'src/app/alerts/models/interfaces/message';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private msgService: MessagesService) { }

  ngOnInit() {    
    window.addEventListener('online', this.updateIndicator.bind(this));
    window.addEventListener('offline', this.updateIndicator.bind(this))
  }

  updateIndicator(event){
    let msg: IMessage = {msg: '', type: ''};

    if(event.type == 'online'){
      msg.msg = "Se ha establecido conexión de red.";
      msg.type = 'success';
    }else if(event.type == 'offline'){
      msg.msg = "Se ha perdido conexión de red.";
      msg.type = 'error';
    }

    this.msgService.message(msg);
  }

}
