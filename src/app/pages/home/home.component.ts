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
  topratedMoviesResults?: Movie[] = [];
  actionMovieResults?: Movie[] = [];
  comedyMovieResults?: Movie[] = [];
  sciencefictionMovieResults?: Movie[] = [];

  constructor(
    private readonly router:Router, 
    private moviesService: MoviesService,
  ) {}

  ngOnInit (): void {
    this.trendingMovies();
    this.topratedMovies();
    this.actionMovies();
    this.comedyMovies();
    this.sciencefictionMovies();
  }

  trendingMovies () {
    this.moviesService.getTrendingMovies().subscribe((result) => {
      this.trendingMoviesResults = result.results;
    });
  }
  
  topratedMovies () {
    this.moviesService.getTopRatedMovies().subscribe((result) => {
      this.topratedMoviesResults = result.results;
    });
  }

  actionMovies () {
    this.moviesService.getActionMovies().subscribe((result) => {
      this.actionMovieResults = result.results;
    });
  }

  comedyMovies () {
    this.moviesService.getComedyMovies().subscribe((result) => {
      this.comedyMovieResults = result.results;
    });
  }

  sciencefictionMovies () {
    this.moviesService.getScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResults = result.results;
    });
  }

  gotodetails() {
    this.router.navigateByUrl('/detalle');
  }
}