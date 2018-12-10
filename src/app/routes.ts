import { Routes } from "@angular/router";
import { AuthGuardService } from "./auth/services/auth-guard.service";

export const routes: Routes = [
    {
        path: '',
        loadChildren: './core/core.module#CoreModule',
        canActivate: [AuthGuardService]
    },
    {
        path: '**', redirectTo: '/', pathMatch: 'full'
    }
];