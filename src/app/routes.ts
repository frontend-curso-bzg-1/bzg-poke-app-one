import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadChildren: './core/core.module#CoreModule'
    },
    {
        path: '**', redirectTo: '/', pathMatch: 'full'
    }
];