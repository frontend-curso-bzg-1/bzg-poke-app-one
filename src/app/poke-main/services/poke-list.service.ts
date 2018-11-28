import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokeListService {

  url = 'api/bookList';

  constructor(private http: HttpClient) { }

  getBooks() : Observable<any> {
    return this.http.get(this.url)
            .pipe(
              catchError(this.handleError('getBooks'))
            );
  }

  private handleError<T>(operation = 'operation', results?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(results as T);
    }
  }
}
