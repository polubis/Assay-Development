import * as FilterActions from './filter.actions';
import * as fromApp from '../../app.reducers';

export interface FeatureState extends fromApp.AppState{
    filter: State
}

export interface Filter  {
    filter: {
        category: string,
        value: any
    }
}

export interface State{
    projectFilters: Filter[],
    studyFilters: Filter[],
    experimentFilters: Filter[],
};

const initialState: State = {
    projectFilters: [], 
    studyFilters: [],
    experimentFilters: []
};

export function filterReducer(state = initialState, action: FilterActions.FilterActions){
    switch(action.type){
        case FilterActions.SET_FILTERS:
            return {
                ...state,
                filterCategories: {...action.payload}
            }
        case FilterActions.ADD_FILTER: {
            return {
                ...state, 
                [action.payload.filterCategory]: [...[action.payload.filterCategory], action.payload.filter]
            }
        }
        default:
            return state;
    }
}