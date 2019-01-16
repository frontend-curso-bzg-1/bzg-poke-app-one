import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from "@angular/animations";
import { Store, select } from "@ngrx/store";
import * as fromRoot from "../../../reducers";
import * as fromLayout from "../../reducers/layout";
import { Observable } from "rxjs";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css'],
  animations: [
    trigger('asideAnimation', [
      state('close', style({
        width: '50px',
      })),
      state('open', style({
        width: '100%'
      })),
      transition('open => close', animate('100ms ease-out')),
      transition('close => open', animate('100ms ease-in'))
    ])
  ]
})
export class CoreComponent implements OnInit {

  dataBook: string;
  stateAside$: Observable<string> = this.store.pipe(select(fromRoot.getShowSideNav));
  state: string = null;

  constructor(private store: Store<fromRoot.State>) { 
    
  }  

  ngOnInit() {
    this.stateAside$.subscribe (
      state => {
        this.state = state;
      }
    );
  }

  searchBook(data: string){
    this.dataBook = data;
  }

}
