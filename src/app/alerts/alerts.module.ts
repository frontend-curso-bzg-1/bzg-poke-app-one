import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessagesComponent } from './components/alert-messages/alert-messages.component';

@NgModule({
  declarations: [AlertMessagesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlertMessagesComponent
  ]
})
export class AlertsModule { }
