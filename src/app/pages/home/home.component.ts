import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/intefaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  trendingMoviesResults?: Movie[] = [];

  constructor(
    private readonly router:Router, 
    private moviesService: MoviesService,
  ) {}

  ngOnInit (): void {
    this.trendingMovies();
  }

  trendingMovies () {
    this.moviesService.getTrendingMovies().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMoviesResults = result.results;
    });
  }

  gotodetails() {
    this.router.navigateByUrl('/detalle');
  }
}