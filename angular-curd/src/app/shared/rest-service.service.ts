import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reader } from '../shared/reader';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
  // Define API
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  /*========================================
  CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // HttpClient API get() method => Fetch Readers list
  getReaders(): Observable<Reader> {
    return this.http.get<Reader>(this.apiURL + '/readers')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API get() method => Fetch Reader
  getReader(id): Observable<Reader> {
    return this.http.get<Reader>(this.apiURL + '/readers/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API post() method => Create Reader
  createReader(reader): Observable<Reader> {
    return this.http.post<Reader>(this.apiURL + '/readers', JSON.stringify(reader), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update reader
  updateReader(id, reader): Observable<Reader> {
    return this.http.put<Reader>(this.apiURL + '/readers/' + id, JSON.stringify(reader), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  // HttpClient API delete() method => Delete reader
  deleteReader(id) {
    return this.http.delete<Reader>(this.apiURL + '/readers/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
