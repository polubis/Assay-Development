import { Component, OnInit, Input } from '@angular/core';
import { TableService, Table } from "src/app/services/table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() type: string;
  isFilterOpen: boolean = true;
  areSettingsOpen: boolean = true;

  constructor(private tableService: TableService) { 
  }

  ngOnInit() {
  }

  togle(key: string){
    this[key] = !this[key];
  }

}
