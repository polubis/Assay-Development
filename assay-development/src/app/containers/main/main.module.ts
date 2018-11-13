

import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { UtilsModule } from "../../components/utils/utils.module";
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from "@angular/common";
import { ProjectNavigatorComponent } from './project-navigator/project-navigator.component';
import { StoreModule } from "@ngrx/store";
import { projectReducer } from '../../store/project/project.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProjectEffects } from '../../store/project/project.effects';
import { PrompterComponent } from "src/app/components/prompter/prompter.component";

@NgModule({
    declarations: [MainComponent, ProjectNavigatorComponent, PrompterComponent],
    imports: [MainRoutingModule, 
        CommonModule, UtilsModule, 
        StoreModule.forFeature('project', projectReducer), 
        EffectsModule.forFeature([ProjectEffects])]
})
export class MainModule {}