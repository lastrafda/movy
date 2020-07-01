import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import { IError, ITrendResponse } from '../shared/models/trend.model';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.movieAPIUrl;
  }

  getTrends(): Observable<ITrendResponse>{
    return this.http.get<ITrendResponse>(`${this.baseUrl}trending/all/week?api_key=${environment.movieAPIKey}`)
      .pipe(catchError(this.handleError));
  }

  // Copy-pasted from https://scotch.io/bar-talk/error-handling-with-angular-6-tips-and-best-practices192
  handleError(error){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
