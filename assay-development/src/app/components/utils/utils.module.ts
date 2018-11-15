
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from './loader/loader.component';
import { TableService } from "src/app/services/table.service";
import { TableComponent } from "src/app/components/utils/table/table.component";
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormComponent } from './form/form.component';
@NgModule({
  declarations: [LoaderComponent, TableComponent, ButtonComponent, InputComponent, FormComponent],
  imports: [CommonModule],
  exports: [CommonModule, LoaderComponent, TableComponent, ButtonComponent, InputComponent, FormComponent],
  providers: [TableService]
})
export class UtilsModule {}