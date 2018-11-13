

import { NgModule } from "@angular/core";
import { SlidesComponent } from "./slides.component";
import { SlidesRoutingModule } from './slides-routing.module';
import { UtilsModule } from "../../../components/utils/utils.module";

@NgModule({
    declarations: [SlidesComponent],
    imports: [SlidesRoutingModule, UtilsModule]
})
export class SlidesModule {}