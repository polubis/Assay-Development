


import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RunsComponent } from "./runs.component";

const runsRoutes: Routes = [
    { path: '', component: RunsComponent }
];

@NgModule({
  imports: [
      RouterModule.forChild(runsRoutes)
  ],
  exports: [RouterModule]
})
export class RunsRoutingModule {}