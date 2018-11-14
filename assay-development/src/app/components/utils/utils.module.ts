
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from './loader/loader.component';
import { TableService } from "src/app/services/table.service";
import { TableComponent } from "src/app/components/utils/table/table.component";
@NgModule({
  declarations: [LoaderComponent, TableComponent],
  imports: [CommonModule],
  exports: [CommonModule, LoaderComponent, TableComponent],
  providers: [TableService]
})
export class UtilsModule {}