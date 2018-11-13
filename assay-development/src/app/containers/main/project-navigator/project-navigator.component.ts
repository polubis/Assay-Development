import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Project } from "src/app/models/Project";
import * as fromProject from '../../../store/project/project.reducers';
import * as ProjectActions from '../../../store/project/project.actions';
@Component({
  selector: 'app-project-navigator',
  templateUrl: './project-navigator.component.html',
  styleUrls: ['./project-navigator.component.scss']
})
export class ProjectNavigatorComponent implements OnInit {
  constructor(private store: Store<fromProject.FeatureState>) {}

  projects: Project[] = [];
  isLoadingProjects: boolean = true;

  ngOnInit() {
    this.store.select("project").subscribe(projects => {
      console.log(projects);
      this.isLoadingProjects = projects.loading;
      this.projects = projects.projects;
    });
    this.store.dispatch(new ProjectActions.FetchProjects());
  }
}
