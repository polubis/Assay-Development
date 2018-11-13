

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RunsComponent } from "./runs.component";
import { RunsRoutingModule } from './runs-routing.module';

@NgModule({
    declarations: [RunsComponent],
    imports: [CommonModule, RunsRoutingModule]
})
export class RunsModule {}