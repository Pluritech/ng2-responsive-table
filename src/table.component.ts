import { TableContent } from './table.content';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() data: TableContent;
  @Output() selectedChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedChangeAll: EventEmitter<any> = new EventEmitter<any>();
  public selected: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  toggle(row) {
    if (row) {
      const index = this.selected.indexOf(row);
      if (index  === -1) {
        this.selected.push(row);
      } else {
        this.selected.splice(index, 1);
      }
      this.selectedChange.emit(this.selected);
      console.log(this.selected);
    } else {
      this.handleSelectAll();
      this.selectedChangeAll.emit({
        selecteds: this.selected,
        allSelected: this.selected.length ? true : false
      });
      console.log({
        selecteds: this.selected,
        allSelected: this.selected.length ? true : false
      });
    }
  }

  exists(row) {
    return this.selected.indexOf(row) > -1;
  }

  private handleSelectAll() {
    if (this.selected.length) {
      this.selected.splice(0, this.selected.length);
    } else {
      this.selected = this.selected.concat(this.data.rows);
    }
  }

}
