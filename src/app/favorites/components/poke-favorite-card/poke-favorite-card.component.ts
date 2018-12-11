import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poke-favorite-card',
  templateUrl: './poke-favorite-card.component.html',
  styleUrls: ['./poke-favorite-card.component.css']
})
export class PokeFavoriteCardComponent implements OnInit {
  

  @Input() poke : any;  

  constructor() { }

  ngOnInit() {
  }

}
