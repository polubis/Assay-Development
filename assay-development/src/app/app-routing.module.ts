import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from "src/app/services/auth.guard";
const routes: Routes = [
  { path: '', loadChildren: './containers/main/main.module#MainModule', canLoad: [AuthGuard] },
  { path: "**", redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
