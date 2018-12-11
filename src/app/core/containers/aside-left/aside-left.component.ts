import { Component, OnInit, Input } from '@angular/core';
import { User } from "firebase/app";
import { AuthService } from "../../../auth/services/auth.service";

@Component({
  selector: 'app-aside-left',
  templateUrl: './aside-left.component.html',
  styleUrls: ['./aside-left.component.css']  
})
export class AsideLeftComponent implements OnInit {

  @Input() asideState: string;

  user: User;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.profileUser()
    .subscribe(
      user => {
        this.user = user;
      }
    );
    //photoUrl: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
  }

}
