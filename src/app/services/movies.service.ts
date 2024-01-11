import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  MoviesResponse,
  MovieDetails,
  Credits,
} from '../intefaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseURL = 'https://api.themoviedb.org/3';
  private apikey = '4bfd3924cef3ab952c5dcea6eb59f58d';

  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.baseURL}/trending/movie/week?api_key=${this.apikey}`
    );
  }

  getTopRatedMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.baseURL}/movie/top_rated?api_key=${this.apikey}`
    );
  }

  getActionMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=28`
    );
  }

  getComedyMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=35`
    );
  }

  getScienceFictionMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=878`
    );
  }

  getSearchMovie(movieName: string): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.baseURL}/search/movie?api_key=${this.apikey}&query=${movieName}&language=es-ES`
    );
  }

  getMovieDetails(movieId: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(
      `${this.baseURL}/movie/${movieId}?language=es-ES&api_key=${this.apikey}`
    );
  }

  getCredits(movieId: number): Observable<Credits> {
    return this.http.get<Credits>(
      `${this.baseURL}/movie/${movieId}/credits?api_key=${this.apikey}`
    );
  }
}
