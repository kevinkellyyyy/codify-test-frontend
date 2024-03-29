import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Base } from '../interface/base';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AllSvcService {
  private apiUrl = 'https://dummyapi.io/data/v1/';

  httpOptions = {
    headers: new HttpHeaders({
      'app-id': '624a9a726c1213830f3ccd64'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  // DONE
  getAllUser(): Observable<Base> {
    return this.httpClient.get<Base>(this.apiUrl + 'user', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getUserProfile(id: string): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + 'user' + `/${id}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // DONE
  getAllPost(): Observable<Base> {
    return this.httpClient.get<Base>(this.apiUrl + 'post', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getPostbyId(id: string): Observable<Base> {
    return this.httpClient.get<Base>(this.apiUrl + 'post' + `/${id}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getPostByUser(id: string): Observable<Base> {
    return this.httpClient.get<Base>(this.apiUrl + 'user' + `/${id}/post`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  // DONE
  getPostByTag(tag: string): Observable<Base> {
    return this.httpClient.get<Base>(this.apiUrl + 'tag' + `/${tag}/post`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // DONE
  getComment(id: string): Observable<Base> {
    return this.httpClient.get<Base>(this.apiUrl + 'post' + `/${id}/comment`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // DONE
  getAllTag(): Observable<Base> {
    return this.httpClient.get<Base>(this.apiUrl + 'tag', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
