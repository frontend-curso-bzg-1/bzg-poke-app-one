import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { PokeListService } from '../../services/poke-list.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  pokemon: any;

  constructor(private route: ActivatedRoute, private pokeListService: PokeListService) { }

  ngOnInit() {
    let id:string;

    this.route.params.subscribe((params: Params) => {
      id = params.id;
      this.pokeListService.getPokemonById(+id)
      .subscribe(
        poke => {
          this.pokemon = poke;
        }
      );
    });
  }

  addFavorite(event){
    this.pokeListService.addFavorite(event);
  }

}
