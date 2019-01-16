import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from "@ngrx/store";
import * as fromRoot from '../../../reducers';
import * as layout from '../../actions/layout';
import { Observable } from "rxjs";

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  @Output() searchTop = new EventEmitter<string>();  

  stateAside$: Observable<string> = this.store.pipe(select(fromRoot.getShowSideNav));
  _state: string;

  constructor(private store: Store<fromRoot.State>) { 
    this.stateAside$.subscribe(
      aside => {
        this._state = aside;
      }
    );
  }

  ngOnInit() {
  }

  search(data :string) {
    this.searchTop.emit(data);
  }

  close(){
    if(this._state == 'open'){      
      this.store.dispatch(new layout.CloseSideNav());
    }else {
      this.store.dispatch(new layout.OpenSideNav());
    }
  }

}
