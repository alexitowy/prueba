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
}
