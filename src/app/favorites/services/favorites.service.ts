import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import * as firbase from "firebase/app";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favsRef : AngularFireList<any>;

  constructor(private rdbFire: AngularFireDatabase) { }

  listFavorites(user : firebase.User) : Observable<any[]> {
    this.favsRef = this.rdbFire.list(`favorites/${user.uid}`);
    return this.favsRef.valueChanges();
  }
}
