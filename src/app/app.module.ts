import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { BooksDBService } from "./api-data/api-books-demo";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { AppComponent } from './app.component';
import { routes } from "./routes";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CoreModule,
    AuthModule,
    HttpModule,
    HttpClientModule,
    /**HttpClientInMemoryWebApiModule.forRoot(
      BooksDBService, {dataEncapsulation: false, delay: 3000, caseSensitiveSearch: true}
    ), */
    AngularFireModule.initializeApp(environment.firebaseConfig, 'poke-app-one'),
    AngularFireAuthModule,
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
