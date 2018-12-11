import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { PokeListComponent } from './containers/poke-list/poke-list.component';

import { routes } from "./routes.poke";
import { PokeDetailComponent } from './containers/poke-detail/poke-detail.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { PokeInfoComponent } from './components/poke-info/poke-info.component';

@NgModule({
  declarations: [PokeListComponent, PokeDetailComponent, PokeCardComponent, PokeInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PokeMainModule { }
