import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, SearchComponent],
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  exports: [NavbarComponent, SearchComponent],
})
export class SharedModule {}
