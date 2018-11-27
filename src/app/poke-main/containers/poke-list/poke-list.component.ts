import { Component, OnInit } from '@angular/core';
import { books } from "../../../books";

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  books : any[] = [];

  constructor() { }

  ngOnInit() {
    this.books = books.items;
  }

}
