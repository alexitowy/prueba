import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {}

  searchResult: any;
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  onSubmit() {
    console.log(this.searchForm.value, 'searchform#');
    this.moviesService
      .getSearchMovie(this.searchForm.value)
      .subscribe((result) => {
        /* TODO: REFACTORING AND CONSOLE.LOG */
        console.log(result, 'searchmovie##');
        this.searchResult = result.results;
        this.searchForm.reset();
      });
  }
}
