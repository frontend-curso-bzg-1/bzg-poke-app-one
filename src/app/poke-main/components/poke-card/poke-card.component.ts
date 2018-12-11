import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokeListService } from '../../services/poke-list.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  _pokeResult: {name: string, url: string};
  _poke: any;

  @Output() favorite = new EventEmitter<any>();

  @Input() 
  get poke() : {name: string, url: string}{
    return this._pokeResult;
  };

  set poke(result : {name: string, url: string}){
    this.pokeService.getPokemonByUrl(result.url)
    .subscribe(
      pokemon => {
        this._poke = pokemon;
      }
    )
  }

  constructor(private pokeService: PokeListService) { }

  ngOnInit() {
  }

  addFavorite(){
    this.favorite.emit(this._poke);
  }

}
