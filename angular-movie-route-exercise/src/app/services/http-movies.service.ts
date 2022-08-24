import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Movie } from '../models/movie';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {

  constructor(private http: HttpClient) {
   }

   url = "http://localhost:3000/movies";

   private handleError(error: HttpErrorResponse){
    if(error.status === 0){
      console.error("An error occured: ", error.error)
    }else if(error.status>300 && error.status <400 ){
      console.error(` You got redirected somewhere else. The request was received, but there’s a redirect of some kind. Error: ${error.error}`)
    }else if(error.status > 400 && error.status < 500){
      console.error(`Page not found. The site or page couldn’t be reached. Error: ${error.error}`)
    }else if(error.status >= 500){
      console.error(`Failure. A valid request was made by the client but the server failed to complete the request. Error: ${error.error}`)
    }
    return throwError(()=>new Error(`Something bad happened; please try again later.`))
   }

   getMovies():Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url).pipe(
      tap(console.log),
      catchError(this.handleError)
    )
   }

   addNewMovie(movie:Movie):Observable<Movie>{
    return this.http.post(this.url + "/", movie).pipe(
      tap(console.log),
      catchError(this.handleError)
    )
   }

   changeMovie(movie:Movie):Observable<Movie>{
    return this.http.put<Movie>(this.url + "/" + movie.id, movie).pipe(
      tap(console.log),
      catchError(this.handleError)
    )
   }
   
   changeSomethingInMovie(movie:Partial<Movie>):Observable<Movie>{
    return this.http.patch<Partial<Movie>>(this.url + "/" + movie.id, movie).pipe(
      tap(console.log),
      catchError(this.handleError)
    )
   }

   deleteMovie(id:string):Observable<Movie>{
    return this.http.delete(`${this.url}/${id}`).pipe(
      tap(console.log),
      catchError(this.handleError)
    )
   }

}
