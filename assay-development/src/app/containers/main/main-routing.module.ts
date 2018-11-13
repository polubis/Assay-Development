


import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import { ProjectNavigatorComponent } from "src/app/containers/main/project-navigator/project-navigator.component";

const mainRoutes: Routes = [
    { path: '', component: MainComponent, children: [
            { path: '', component: ProjectNavigatorComponent },
            { path: 'slides', loadChildren: './slides/slides.module#SlidesModule', pathMatch: 'full' }
        ]  
    }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}