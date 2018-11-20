import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  dataBook: string;

  constructor() { }  

  ngOnInit() {
  }

  searchBook(data: string){
    this.dataBook = data;
  }

}
