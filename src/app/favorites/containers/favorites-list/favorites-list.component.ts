import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  pokeList: any[] = [];

  constructor(private favService: FavoritesService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.profileUser()
    .subscribe(
      user => {
        this.favService.listFavorites(user)
        .subscribe(
          list => {
            this.pokeList = list;
          }
        );
      }
    );
  }

}
