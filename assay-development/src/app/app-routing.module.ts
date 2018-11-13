import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from './containers/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'runs', loadChildren: './containers/runs/runs.module#RunsModule' },
  { path: 'slides', loadChildren: './containers/slides/slides.module#SlidesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
