import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, MovieComponent, SearchComponent],
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  exports: [NavbarComponent, MovieComponent, SearchComponent],
})
export class SharedModule {}
