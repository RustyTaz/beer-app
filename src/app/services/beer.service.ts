import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../models/beer';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BeerService {
  constructor(private http: HttpClient) {}

  getBeerList(): Observable<Beer[]> {
    return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers').pipe(
      tap((beers) => console.log('Beers fetched!')),
      catchError(this.handleError<Beer[]>('Get Beers', []))
    );
  }

   getBeer(id: string): Observable<Beer[]> {
    return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers/' + id)
      .pipe(
        tap(_ => console.log(`Beer fetched id=: ${id}`)),
        catchError(this.handleError<Beer[]>(`Get Beer id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
