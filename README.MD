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
<ng-table [data]=data></ng-table>
```
So, in the typescript you will need:
```typescript
public data: TableContent = {
    columns: [
      {id: 'name', name: 'Nome'},
      {id: 'age', name: 'Idade'}
    ],
    rows: [
      {name: 'Mateus', age: '23'},
      {name: 'Lucas', age: '26'}
    ],
    actions: [
      {name: 'Add Something', class: 'btn btn-primary', icon: 'fa fa-plus',
      condition: row => {
        console.log('condition', row);
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
class  | css class to be applied to button
icon   | font-awesome icon to be applied to button
condition | a function who can receive the row, return a boolean who indicates if the button should be displayed
handler | a function who can receive the row and will be executed when the button is clicked

### License
MIT © mduraes1994 and lucascco
