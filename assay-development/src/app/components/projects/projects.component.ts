import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from "@ngrx/store";
import * as fromFilter from '../../store/filter/filter.reducers';
import { Subscription } from "rxjs";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  filters: fromFilter.Filter[];
  constructor(private store: Store<fromFilter.FeatureState>) {}

  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.store.select(state => state.filter.projectFilters)
      .subscribe((filters: fromFilter.Filter[]) => {
        console.log(filters);
        this.filters = filters;
      });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  addFilter(filterData: any) {

  }

  removeFilter(filterIndex: number) {
    
  }
}
