import { Routes } from "@angular/router";
import { FavoritesListComponent } from "./containers/favorites-list/favorites-list.component";

export const routes: Routes = [
    {
        path: 'list',
        component: FavoritesListComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    }
];