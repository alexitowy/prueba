import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/intefaces/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  trendingMoviesResults: any[] = [];
  topratedMoviesResults: any[] = [];
  actionMovieResults: any[] = [];
  comedyMovieResults: any[] = [];
  sciencefictionMovieResults: any[] = [];

  secciones: { titulo: string; resultados: Movie[] | undefined }[] = [];

  constructor(
    private readonly router: Router,
    private moviesService: MoviesService
  ) {}

  
  ngOnInit(): void {
    // Obtener datos de películas antes de inicializar las secciones
    this.trendingMovies();
    this.topratedMovies();
    this.actionMovies();
    this.comedyMovies();
    this.sciencefictionMovies();
  }
  
  initializeSections() {
    this.secciones = [
      { titulo: 'Tendencias', resultados: this.trendingMoviesResults },
      { titulo: 'Populares', resultados: this.topratedMoviesResults },
      { titulo: 'Accion', resultados: this.actionMovieResults },
      { titulo: 'Comedia', resultados: this.comedyMovieResults },
      {
        titulo: 'Ciencia Ficción',
        resultados: this.sciencefictionMovieResults,
      },
    ];
  }
  
  trendingMovies() {
    this.moviesService.getTrendingMovies().subscribe((result) => {
      this.trendingMoviesResults = result.results;
      this.initializeSections();
    });
  }

  topratedMovies() {
    this.moviesService.getTopRatedMovies().subscribe((result) => {
      this.topratedMoviesResults = result.results;
      this.initializeSections();
    });
  }

  actionMovies() {
    this.moviesService.getActionMovies().subscribe((result) => {
      this.actionMovieResults = result.results;
      this.initializeSections();
    });
  }

  comedyMovies() {
    this.moviesService.getComedyMovies().subscribe((result) => {
      this.comedyMovieResults = result.results;
      this.initializeSections();
    });
  }

  sciencefictionMovies() {
    this.moviesService.getScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResults = result.results;
      this.initializeSections();
    });
  }

  gotodetails() {
    this.router.navigateByUrl('/detalle');
  }

  // Variable para controlar el estado del fondo del navbar
  isNavbarTransparent = true;

  // Listener para el evento de scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;

    // Cambia la clase del navbar dependiendo del valor de scrollY
    this.isNavbarTransparent = scrollY < 100; // Ajusta este valor según tus necesidades
  }

  handleImageError() {
    console.log('Error al cargar la imagen');
    // Puedes realizar alguna acción adicional si es necesario
  }
}
