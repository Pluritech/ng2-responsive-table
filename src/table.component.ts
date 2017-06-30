import { TableContent } from './table.content';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: TableContent;

  constructor() { }

  ngOnInit() {
  }

}
