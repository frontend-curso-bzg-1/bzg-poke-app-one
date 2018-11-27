import { Routes } from "@angular/router";
import { CollectionListComponent } from "./containers/collection-list/collection-list.component";

export const routes:Routes = [
    {
        path: 'list',
        component: CollectionListComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    }
];