import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() movie: any;
  showDetails = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
    console.log(this.showDetails);
    if (this.showDetails) {
      setTimeout(() => {
        this.showDetails = false;
      }, 15000);
    }
  }

  truncateTitle(title: string): string {
    return title.length > 20 ? `${title.slice(0, 20)}...` : title;
  }
}
