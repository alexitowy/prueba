import { Injectable } from '@angular/core';
import { Credits } from '../intefaces/credits';
import { Movies } from '../intefaces/movie';
import { MovieDetails } from '../intefaces/movie-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  private baseURL = 'https://api.themoviedb.org/3';
  private apikey = '4bfd3924cef3ab952c5dcea6eb59f58d';
  Movies!: Movies;
  Movie!: MovieDetails;
  Cast!: Credits;

  constructor(private http: HttpClient) {}

  getTrendingMovies (): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseURL}/trending/movie/week?api_key=${this.apikey}`);
  }

  getTopRatedMovies (): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseURL}/movie/top_rated?api_key=${this.apikey}`);
  }

  getActionMovies (): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  getComedyMovies (): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  getScienceFictionMovies (): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseURL}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  getMovieDetails (id: any): Observable<Movies> {
    return this.http.get<Movies>(`${this.baseURL}/movie/${id}?language=es-ES&api_key=${this.apikey}`)
  }
}