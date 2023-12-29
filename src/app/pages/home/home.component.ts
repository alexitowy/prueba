import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'prueba';
  genres = {
    "genres": [
      {
        "id": 28,
        "name": "Acción"
      },
      {
        "id": 12,
        "name": "Aventura"
      },
      {
        "id": 16,
        "name": "Animación"
      },
      {
        "id": 35,
        "name": "Comedia"
      },
      {
        "id": 80,
        "name": "Crimen"
      },
      {
        "id": 99,
        "name": "Documental"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Familia"
      },
      {
        "id": 14,
        "name": "Fantasía"
      },
      {
        "id": 36,
        "name": "Historia"
      },
      {
        "id": 27,
        "name": "Terror"
      },
      {
        "id": 10402,
        "name": "Música"
      },
      {
        "id": 9648,
        "name": "Misterio"
      },
      {
        "id": 10749,
        "name": "Romance"
      },
      {
        "id": 878,
        "name": "Ciencia ficción"
      },
      {
        "id": 10770,
        "name": "Película de TV"
      },
      {
        "id": 53,
        "name": "Suspense"
      },
      {
        "id": 10752,
        "name": "Bélica"
      },
      {
        "id": 37,
        "name": "Western"
      }
    ]
  };
  movies =[
    {
        "adult": false,
        "backdrop_path": "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
        "genre_ids": [
          18,
          878,
          28
        ],
        "id": 695721,
        "original_language": "en",
        "original_title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "overview": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
        "popularity": 2380.849,
        "poster_path": "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
        "release_date": "2023-11-15",
        "title": "The Hunger Games: The Ballad of Songbirds & Snakes",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 1128
    },
    {
        "adult": false,
        "backdrop_path": "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
        "genre_ids": [
          878,
          28,
          12
        ],
        "id": 848326,
        "original_language": "en",
        "original_title": "Rebel Moon - Part One: A Child of Fire",
        "overview": "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
        "popularity": 2535.152,
        "poster_path": "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
        "release_date": "2023-12-15",
        "title": "Rebel Moon - Part One: A Child of Fire",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 639
    }
  ];

  constructor(
    private readonly router:Router
  ) {

  }

  goToDetails() {
    this.router.navigateByUrl('/detalle');
  }
}