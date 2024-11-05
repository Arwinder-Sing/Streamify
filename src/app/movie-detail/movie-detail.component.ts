import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service'; // Adjust the import based on your project structure
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  @Input() movieId!: string; 
  movieDetails: any;
  showDetails = false;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    if (this.movieId) {
      this.fetchMovieDetails(this.movieId);
    }
  }

  fetchMovieDetails(id: string) {
    this.movieService.getMovieDetails(id).subscribe((details) => {
      this.movieDetails = details;
    });
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    console.log(this.showDetails);
  }
}
