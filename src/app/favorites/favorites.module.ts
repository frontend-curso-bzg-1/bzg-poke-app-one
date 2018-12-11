import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FavoritesListComponent } from './containers/favorites-list/favorites-list.component';
import { routes } from "./routes.favorites";
import { PokeFavoriteCardComponent } from './components/poke-favorite-card/poke-favorite-card.component';

@NgModule({
  declarations: [FavoritesListComponent, PokeFavoriteCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FavoritesModule { }
