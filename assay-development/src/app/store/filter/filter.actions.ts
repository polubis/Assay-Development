import { Action } from "@ngrx/store";
import * as fromFilter from './filter.reducers';

export const ADD_FILTER = "[Filter] ADD_FILTER";
export const SET_FILTERS = "[Filter] SET_FILTERS";

export class AddFilter implements Action{
    readonly type = ADD_FILTER;
    constructor(public payload: {filterCategory: string, filter: fromFilter.Filter}){}
}

export class SetFilters implements Action{
    readonly type = SET_FILTERS;
    constructor(public payload: fromFilter.State){}
}

export type FilterActions = AddFilter | SetFilters;