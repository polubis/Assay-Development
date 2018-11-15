

import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { UtilsModule } from "../../components/utils/utils.module";
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from "@angular/common";
import { ProjectNavigatorComponent } from './project-navigator/project-navigator.component';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';

import { PrompterComponent } from "src/app/components/prompter/prompter.component";
import { ProjectsComponent } from '../../components/projects/projects.component';
import { StudiesComponent } from "src/app/components/studies/studies.component";
import { ExperimentsComponent } from "src/app/components/experiments/experiments.component";


import { projectReducer } from '../../store/project/project.reducers';
import { filterReducer } from '../../store/filter/filter.reducers';

import { ProjectEffects } from '../../store/project/project.effects';
import { FilterEffects } from "src/app/store/filter/filter.effects";

@NgModule({
    declarations: [MainComponent, ProjectNavigatorComponent, PrompterComponent, ProjectsComponent, StudiesComponent, ExperimentsComponent],
    imports: [MainRoutingModule, 
        CommonModule, UtilsModule, 
        StoreModule.forFeature('project', projectReducer), 
        StoreModule.forFeature('filter', filterReducer),
        EffectsModule.forFeature( [ProjectEffects, FilterEffects] ) 
    ]
})
export class MainModule {} 