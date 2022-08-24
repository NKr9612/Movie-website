import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { HttpMoviesService } from 'src/app/services/http-movies.service';

@Component({
  selector: 'app-change-library',
  templateUrl: './change-library.component.html',
  styleUrls: ['./change-library.component.css']
})
export class ChangeLibraryComponent implements OnInit {

  constructor(private http:HttpMoviesService) { }

  ngOnInit(): void {
  }

  get(){
    this.http.getMovies().subscribe();
  }
  post(){
    const movie:Movie = {
      country: 'Poland',
      director: 'Marek Brodzki',
      category: 'Fantasy',
      plot: 'Zabójca potworów musi wybrać mniejsze zło.',
      poster: null,
      year: '2001',
      title: 'Wiedźmin',
      imdbRating: '10.0',
    }
    this.http.addNewMovie(movie).subscribe();
  }

  put(){
    const movie:Movie = {
      id:"10",
      country: 'Poland',
      director: 'Unknown',
      category: 'Sci-Fi',
      plot: 'Just Join IT',
      poster: null,
      year: '2022',
      title: 'Developer',
      imdbRating: '10.0',
    }
    this.http.changeMovie(movie).subscribe();
  }

  patch(){
    const movie:Partial<Movie> = {
      id:"31",
      plot:"Nothing change",
    }
    this.http.changeSomethingInMovie(movie).subscribe();
  }

  delete(){
    this.http.deleteMovie("24").subscribe();
  }

}
