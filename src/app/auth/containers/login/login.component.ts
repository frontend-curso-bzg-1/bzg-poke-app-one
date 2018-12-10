import { Component, OnInit, NgZone } from '@angular/core';
import { ILogin } from '../../models/interfaces/auth';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  auth(event : ILogin) {
    if(event) {
      this.authService.login(event)
      .then(
        user => {     
          localStorage.setItem('bzgPokeApp', JSON.stringify(user));
          this.router.navigate(['main'])
        }
      );      
    }
  }

  signWithGoogle(event) {
    if(event){
      this.authService.loginWithGoogle()
      .then(
        user => {
          localStorage.setItem('bzgPokeApp', JSON.stringify(user));
          this.zone.run(
            _ => {
              this.router.navigate(['main']);
            }
          );          
        }
      );
    }
  }

}
