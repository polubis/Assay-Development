import { Component, OnInit, Input } from '@angular/core';
import { TableService, Table } from "src/app/services/table.service";
import { Filter } from "src/app/store/filter/filter.reducers";
import { filterForm, FormConfig } from "../../../models/Form";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  isFilterOpen: boolean = true;
  areSettingsOpen: boolean = true;
  filterForm: FormConfig[] = [...filterForm];

  @Input() type: string;
  @Input() filters: Filter[] = [];

  constructor(private tableService: TableService) { 
  }

  ngOnInit() {
    this.filterForm[0].initialData = [...this.tableService.types[this.type].tableHeaders];
  }

  togle(key: string){
    this[key] = !this[key];
  }

}
