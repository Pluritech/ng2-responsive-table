import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

export * from './table.component';
export * from './table.content';
export * from './table.events';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent,
  ],
  exports: [
    TableComponent
  ]
})
export class Ng2TableModule {}
