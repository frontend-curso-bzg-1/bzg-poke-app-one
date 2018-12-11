import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit {

  @Input() poke: any;
  @Output() pushFavorite = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addFavorite() {
    this.pushFavorite.emit(this.poke);
  }

}
