import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { routes } from "./routes.collections";

@NgModule({
  declarations: [CollectionListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CollectionsModule { }
