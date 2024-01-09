// shared/services/search.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Search {
  private searchFormSource = new BehaviorSubject(null);
  currentSearchForm = this.searchFormSource.asObservable();

  updateSearchForm(searchForm: any) {
    this.searchFormSource.next(searchForm);
  }
}
