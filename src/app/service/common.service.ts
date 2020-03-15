import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { SearchQuery } from '../model/SearchQuery';
import { CompactVenue } from '../model/VenuesSearchResult';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getCategory(searchQuery: SearchQuery): Observable<CompactVenue[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    return this.http.post<any>(environment.baseUr + "/fetchCategoryByParams", searchQuery, { headers: headers })
      .pipe(
        catchError(this.handleError<CompactVenue[]>('getCategory'))
      );
  }
/*
  getCategoryByParams(searchQuery: SearchQuery): Observable<CompactVenue[]> {
    var params = {}
    if (!!searchQuery) {
      params = [
        `near=${searchQuery.near}`,
        `ll=${searchQuery.ll}`,
        `v=20201503`,
        `query=${searchQuery.query}`
      ].join('&');

    }

    return this.http.get<any>(`${environment.baseUr + "/getByParams"}?${params}`)
      .pipe(
        catchError(this.handleError<CompactVenue[]>('getCategoryByParams'))
      );
  }

  getCategoryByMap(searchQuery: SearchQuery): Observable<[]> {
    var params = {}
    if (!!searchQuery) {
      params = [
        `near=${searchQuery.near}`,
        `ll=${searchQuery.ll}`,
        `v=20201503`,
        `query=${searchQuery.query}`
      ].join('&');

    }

    return this.http.post<any>(environment.baseUr + "/getByKeyValue", params)
      .pipe(
        catchError(this.handleError<CompactVenue[]>('getCategoryByMap'))
      );
  }
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
