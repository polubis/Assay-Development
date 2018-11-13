

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SlidesComponent } from "./slides.component";
import { SlidesRoutingModule } from './slides-routing.module';

@NgModule({
    declarations: [SlidesComponent],
    imports: [CommonModule, SlidesRoutingModule]
})
export class SlidesModule {}