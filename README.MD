## ng2-responsive-table

A table responsive component for your angular project.

### Installation

```bash
$ npm install @pluritech/ng2-responsive-table --save
```

Then, import Ng2TableModule
```typescript
import { Ng2TableModule } from '@pluritech/ng2-responsive-table';
```
and add it into your AppModule
```typescript

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Ng2TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

This library depends of bootstrap styles, so, ensure that is correctly installed and imported.

### Usage
In your component template, do the following:
```html
<ng-table [data]="data"></ng-table>
```
So, in the typescript you will need:
```typescript
public data: TableContent = {
    columns: [
      {id: 'name', name: 'Name', width: '50%'},
      {id: 'age', name: 'Age'}
    ],
    rows: [
      { data: { name: 'Mateus', age: '23' }},
      { data: { name: 'Lucas', age: '26'}}
    ],
    actions: [
      {name: 'Add Something', class: 'btn btn-primary', icon: 'fa fa-plus',
      condition: row => {
        console.log('condition', row);
        return true;
      },
      disabled: row => {
        console.log('disabled', row);
        return true;
      },
      handler: row => {
        console.log('handler', row);
      }}
    ]
  };
```

### The TableContent type in details
The columns of the table receive each an id. This id, has to be used in the rows to fill the table correctly.
The actions columns, receive the following

 Field | Description
------ | ----------- 
name   | Text of the button
class  | css class name to be applied to button
icon   | css class name icon to be applied to button
condition | a function which receives a row and returns a boolean indicating whether this current action button should be displayed
disabled | a function which receives a row and determines whether this current action button should be disabled
handler | a function who can receive the row and will be executed when the button is clicked

You can also set noRowsMsg to show when no there data on table. Default is: Nenhum registro exibido

### Working with checkboxes columns
If you need a column of checkbox in your table, where, the table header of this column will mark all registers you can do the following:
```typescript
    columns: [
      {id: '', name: '', checkbox: {singleName: 'Marcar'}},
      {id: 'name', name: 'Name'},
      {id: 'age', name: 'Age'}
    ],
```
the singleName property is the label of every checkbox on mobile screen.
To get all the changes in the selected rows, you'll need to pass a function to the following two outputs properties:
```html
  <ng-table [data]="data"
      (selectedChange)="onSelectedChange($event)"
      (selectedChangeAll)="onSelectedChangeAll($event)"></ng-table>
```
 Event | Description
------ | ----------- 
selectedChange   | Will fire every time a single row change the selected status. The event will send the array with selecteds rows
selectedChangeAll  | Will fire every time the table header button change the selected status. The event will send the array with selecteds rows and a boolean indicating if isAllSelected or not.


### License
MIT © [Pluritech](https://www.pluritech.com.br/)
