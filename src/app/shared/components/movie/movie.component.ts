import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  title = 'prueba';
  @Input() movie!: Record<any,any>

  constructor(
    private readonly router:Router
  ) {

  }

  gotodetails() {
    this.router.navigateByUrl('/detalle');
  }
}