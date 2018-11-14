


import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";
import { ProjectNavigatorComponent } from "src/app/containers/main/project-navigator/project-navigator.component";
import { AuthGuard } from "src/app/services/auth.guard";

const mainRoutes: Routes = [
    { path: '', component: MainComponent, children: [
            { path: '', component: ProjectNavigatorComponent },
            { path: 'slides', loadChildren: './slides/slides.module#SlidesModule', pathMatch: 'full', canLoad: [AuthGuard] }
        ]  
    }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}