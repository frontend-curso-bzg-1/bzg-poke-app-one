import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AlertsModule } from "../alerts/alerts.module";
import { CoreComponent } from './containers/core/core.component';
import { TopNavBarComponent } from './containers/top-nav-bar/top-nav-bar.component';
import { AsideLeftComponent } from './containers/aside-left/aside-left.component';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { HeaderAsideLeftComponent } from './components/header-aside-left/header-aside-left.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { TopSearchFormComponent } from './components/top-search-form/top-search-form.component';
import { DetailBookComponent } from './containers/detail-book/detail-book.component';

import { routes } from "./routes.core";

@NgModule({
  declarations: [CoreComponent, TopNavBarComponent, AsideLeftComponent, MainContentComponent, HeaderAsideLeftComponent, MainMenuComponent, TopSearchFormComponent, DetailBookComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AlertsModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
