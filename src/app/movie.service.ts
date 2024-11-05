import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Movie {
  imdbID: string;
  Title: string;
  Genre: string;
  imdbRating: string;
  Plot: string;
  Poster: string;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/';
  private apiKey = '8d02bd0a';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    console.log('query', query);
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&s=${query}`);
  }

  getMovies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?apikey=${this.apiKey}&s=popular`);
  }

  getMovieDetails(movieId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&i=${movieId}`);
  }
}
