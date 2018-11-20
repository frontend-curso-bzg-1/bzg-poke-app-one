import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-search-form',
  templateUrl: './top-search-form.component.html',
  styleUrls: ['./top-search-form.component.css']
})
export class TopSearchFormComponent implements OnInit {

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  searchBooks(data: string) {
    this.search.emit(data);
  }

}
