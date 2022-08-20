import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-movie-in-years',
  templateUrl: './movie-in-years.component.html',
  styleUrls: ['./movie-in-years.component.css']
})
export class MovieInYearsComponent implements OnInit {

  movies: Observable<Movie[]>;

  constructor(private http:HttpService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.movies = this.route.paramMap.pipe(
      switchMap((params:ParamMap)=> this.http.getMoviesFromYear(params.get('year')))
    )
    
  }

}
