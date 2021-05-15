import { clear, countSelector, decrease, increase, updatedAtSelector } from './reducers/counter';

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((count: number) => count <= 0));
  updatedAt$ = this.store.select(updatedAtSelector);

  constructor(private readonly store: Store) {}

  increase(): void {
    this.store.dispatch(increase());
  }

  decrease(): void {
    this.store.dispatch(decrease());
  }

  clear(): void {
    this.store.dispatch(clear());
  }
}
