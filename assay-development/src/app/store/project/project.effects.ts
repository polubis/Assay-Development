


import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import * as ProjectActions from '../../store/project/project.actions';
import { switchMap, map, tap } from "rxjs/operators";
import { of } from "rxjs";
import { catchError } from "rxjs/internal/operators/catchError";
import { HandleRequestService } from "../../services/handle-request-service";
import { Project } from "src/app/models/Project";
import * as fromProject from '../../store/project/project.reducers';
@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private handleRequestService: HandleRequestService,
    private store: Store<fromProject.State>
  ) {}

  @Effect()
  projectFetch = this.actions$.ofType(ProjectActions.FETCH_PROJECTS).pipe(
    switchMap((action: ProjectActions.FetchProjects) => {
      return this.handleRequestService.handleRequest(
        "fetchProjects",
        () => this.store.dispatch(new ProjectActions.EndFetchProjects()),
        (ProjectActions.FetchProjects)
      );
    }),
    map(data => {
      console.log("Siema");
      const projects: Project[] = [];
      Object.keys(data).forEach(element => {
        const value = data[element];
        projects.push(
          new Project(
            value.id,
            value.title,
            323213,
            "Project FUnding",
            "Thomas Bhurmuk",
            "on Hold",
            "19-12-2017",
            value.userId
          )
        );
      });
      this.store.dispatch(new ProjectActions.EndFetchProjects());
      return {
        type: ProjectActions.SET_PROJECTS,
        payload: projects
      };
    })
  );
}