import { Component, OnInit } from '@angular/core';
import { PokeListService } from "../../services/poke-list.service";
import { IPokeList } from '../../models/interfaces/poke-list';
//import { books } from "../../../books";

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokeList: IPokeList;

  constructor(private pokeService: PokeListService) { }

  ngOnInit() {    
    this.pokeService.list()
    .subscribe(
      list => {
        this.pokeList = list;
        this.pokeList.results = this.pokeList.results.slice(0,50);
      }
    );
  }

  addFavorite(poke) {
    this.pokeService.addFavorite(poke);
  }

}
