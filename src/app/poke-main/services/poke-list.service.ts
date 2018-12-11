import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import * as firebase from 'firebase/app';
import { MessagesService } from 'src/app/alerts/services/messages.service';
import { environment } from 'src/environments/environment';
import { IPokeList } from '../models/interfaces/poke-list';


@Injectable({
  providedIn: 'root'
})
export class PokeListService {

  url: string = environment.apiUrl;
  favsRef: AngularFireList<any>;
  user: firebase.User

  constructor(private http: HttpClient, private authFire: AngularFireAuth, private rdbFire: AngularFireDatabase,
    private alertMessage: MessagesService) {
    authFire.authState.subscribe(
      user => {
        if (user) {
          this.user = user;
          this.favsRef = rdbFire.list(`favorites/${this.user.uid}`);
        }
      }
    );
  }
  
  list(): Observable<IPokeList> {
    const url = `${this.url}pokemon/`;
    return this.http.get<IPokeList>(url)
      .pipe(
        catchError(this.handleError('Get Pokemons List', null))
      );
  }

  getPokemonByUrl(url :string): Observable<any> {
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError('Get Pokemon', null))
    );
  }

  getPokemonById(id : number): Observable<any> {
    const url = `${this.url}pokemon/${id}/`;    
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError('Get Pokemon by ID', null))
    );
  }

  addFavorite(poke: any) {
    const promise = this.favsRef.push(poke);
    promise.then(
      _ => {
        this.alertMessage.message({ msg: "Pokemon agregado a favoritos", type: 'success' });
      }
    );
  }

  private handleError<T>(operation = 'operation', results?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.messages(`${operation} ha fallado: ${error.message}`);
      return of(results as T);

    }
  }

  private messages(msg: string) {
    let type = "error";
    this.alertMessage.message({ msg: msg, type: type });
  }

}
