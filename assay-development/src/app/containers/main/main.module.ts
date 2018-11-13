

import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { UtilsModule } from "../../components/utils/utils.module";
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from "@angular/common";
import { ProjectNavigatorComponent } from './project-navigator/project-navigator.component';

@NgModule({
    declarations: [MainComponent, ProjectNavigatorComponent],
    imports: [MainRoutingModule, CommonModule, UtilsModule]
})
export class MainModule {}