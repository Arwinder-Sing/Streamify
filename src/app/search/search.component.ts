import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  query: string = '';
  loading: boolean = false;
  noResults: boolean = false;
  movies: any[] = []; 

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.query.trim()) {
      this.movieService.searchMovies(this.query).subscribe(
        (data: any) => {
          this.movies = data.Search || []; 
        },
        (error) => {
          console.error('Error fetching movies:', error);
          this.movies = []; 
        }
      );
    } else {
      this.movies = []; 
    }
  }

  clearSearch() {
    this.query = ''; 
    this.noResults = false; 
    this.movies = [];
  }
}
