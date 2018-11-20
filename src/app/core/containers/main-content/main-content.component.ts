import { Component, OnInit, Input } from '@angular/core';
import { books } from "../../../books";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  _dataBook: string;

  @Input()
  get dataBook(): string {
    return this._dataBook;
  }

  set dataBook(data : string) {
    this._dataBook = data;
    this.search(data);
  }

  books : any[] = [];

  constructor() { }

  ngOnInit() {
    this.books = books.items;
  }

  search(query : string) {
    let book = this.books.find(
      item => {
        return item.volumeInfo.title === query;
      }
    );

    this.books = [];
    this.books.push(book);
  }

}
