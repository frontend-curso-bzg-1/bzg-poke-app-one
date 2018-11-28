import { Component, OnInit } from '@angular/core';
import { PokeListService } from "../../services/poke-list.service";
//import { books } from "../../../books";

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  books : any[] = [];

  constructor(private pokeService: PokeListService) { }

  ngOnInit() {
    //this.books = books.items;
    this.pokeService.getBooks().subscribe(
      books => {
        this.books = books.items;
      }
    );
  }

}
