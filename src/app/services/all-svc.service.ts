import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class AllSvcService {
  private apiUrl = 'https://dummyapi.io/data/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'app-id': 'J3mqXITEt5QH2PddkAM3'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  getAllUser(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl + 'user', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getUserProfile(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl + 'user' + `/${id}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl + 'post', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getPostbyId(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl + 'post' + `/${id}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getPostByUser(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl + 'user' + `/${id}/post`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  getPostByTag(tag: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl + 'tag' + `/${tag}/post`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getComment(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl + 'post' + `/${id}/comment`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllTag(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl + 'tag', this.httpOptions)
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
