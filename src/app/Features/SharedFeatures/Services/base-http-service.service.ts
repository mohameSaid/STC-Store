import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable, pipe, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'; 
import { environment } from "src/environments/environment";  

@Injectable({
  providedIn: 'root'
})
export class BaseHttpServiceService {

  constructor(
    private _http: HttpClient,
     
  ) { }

  protected httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'language': 'en'
    })
  };

  private setHeaders(): void {
     
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'language': 'en'
      })
    };
  }

  protected getData<T>(url: string): Observable<T> {
    this.setHeaders();
    return this._http.get<T>(url, this.httpOptions)
      .pipe(
        tap(result => {
          console.log(`getData() => Data fetched.`);
        }),
        catchError(this.handleError<T>(`getData`))
      );
  }

  protected postData<T>(url: string, data: any): Observable<T> {
    this.setHeaders();
    return this._http.post<T>(url, data, this.httpOptions)
      .pipe(
        tap(result => {
          console.log(`postData() => Data fetched.`);
        }),
        catchError(this.handleError<T>(`postData`))
      );
  }
 
 
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(JSON.stringify(error));  
      throw error;
    };
  }

 
  protected baseUrl: string = environment.apiUrl;;
}
  