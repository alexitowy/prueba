import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Search } from '../../services/services.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private searchService: Search
  ) {}

  ngOnInit(): void {
    this.searchService.currentSearchForm.subscribe((searchForm) => {
      if (searchForm) {
        this.searchForm.patchValue(searchForm);
      }
    });
  }

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
