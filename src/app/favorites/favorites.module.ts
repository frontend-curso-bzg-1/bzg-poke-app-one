import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FavoritesListComponent } from './containers/favorites-list/favorites-list.component';
import { routes } from "./routes.favorites";

@NgModule({
  declarations: [FavoritesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FavoritesModule { }
