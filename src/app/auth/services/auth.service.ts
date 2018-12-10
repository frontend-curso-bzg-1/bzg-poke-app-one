import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { ILogin } from "../models/interfaces/auth";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _isLogged: boolean;

  constructor(private authFire: AngularFireAuth, private router: Router) {
    authFire.authState.subscribe(
      auth => {
        if(auth){
          this._isLogged = true;
        }else {
          this._isLogged = false;
        }
      }
    );
   }

   login(auth: ILogin){
     return this.authFire.auth.signInWithEmailAndPassword(auth.email, auth.password);
   }

   loginWithGoogle() {
     return this.authFire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
   }

   isLoggedIn() : boolean{    
    return this._isLogged;
   }

   profileUser() {
    return this.authFire.authState;
   }

   logout() {
     localStorage.removeItem('bzgPokeApp');
     this.authFire.auth.signOut()
     .then(
       _ => {
         this.router.navigate(['/login']);
       }
     );
   }
}
