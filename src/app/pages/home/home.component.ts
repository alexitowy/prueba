import {
  Component,
  OnInit,
  HostListener,
  AfterViewInit,
  OnChanges,
  AfterViewChecked,
} from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/intefaces/movies.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent
  implements OnInit, AfterViewInit, OnChanges, AfterViewChecked
{
  trendingMoviesResults: any[] = [];
  topratedMoviesResults: any[] = [];
  actionMovieResults: any[] = [];
  comedyMovieResults: any[] = [];
  sciencefictionMovieResults: any[] = [];

  slider: any;
  defaultTransform: any;
  carouselInitialized = false;

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

  ngAfterViewInit(): void {
    // Inicializar el carrusel después de cargar los datos
    of(null)
      .pipe(delay(0))
      .subscribe(() => {
        this.initializeCarousel();
      });
  }

  ngAfterViewChecked(): void {
    // Inicializar el carrusel después de cada verificación de vista
    this.initializeCarousel();
  }

  ngOnChanges(): void {
    // Inicializar el carrusel si hay cambios en los datos
    this.initializeCarousel();
  }

  initializeCarousel() {
    // Obtener el elemento slider después de la inicialización de la vista
    this.slider = document.getElementById('slider');
    this.defaultTransform = 0;

    // Marcar el carrusel como inicializado
    this.carouselInitialized = true;
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

  goNext() {
    if (this.slider) {
      this.defaultTransform = this.defaultTransform - 398;
      if (
        Math.abs(this.defaultTransform) >=
        (this.slider.scrollWidth || 0) / 1.7
      ) {
        this.defaultTransform = 0;
      }
      this.slider.style.transform =
        'translateX(' + this.defaultTransform + 'px)';
    }
    // Utiliza setTimeout para darle tiempo a Angular para detectar los cambios
    setTimeout(() => {});
  }

  goPrev() {
    if (this.slider) {
      if (Math.abs(this.defaultTransform) === 0) {
        this.defaultTransform = 0;
      } else {
        this.defaultTransform = this.defaultTransform + 398;
      }
      this.slider.style.transform =
        'translateX(' + this.defaultTransform + 'px)';
    }
  }
}
