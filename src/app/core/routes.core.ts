import { Routes } from "@angular/router";
import { CoreComponent } from "./containers/core/core.component";

export const routes: Routes = [
    {
        path: 'main',
        component: CoreComponent,
        children: [
            {
                path: 'pokemons',
                loadChildren: '../poke-main/poke-main.module#PokeMainModule'
            },
            {
                path: 'collections',
                loadChildren: '../collections/collections.module#CollectionsModule'
            },
            {
                path: 'favorites',
                loadChildren: '../favorites/favorites.module#FavoritesModule'
            },
            {
                path: '', redirectTo: 'pokemons', pathMatch: 'full'        
            }
        ]
    },    
    {
        path: '', redirectTo: 'main', pathMatch: 'full'
    }
];