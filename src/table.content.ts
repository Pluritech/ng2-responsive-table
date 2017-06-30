export interface TableContent {
    columns: TableColumn[];
    rows: any[];
    actions: TableButton[];
}

export interface TableColumn {
    name: string;
    id: string;
}

export interface TableButton {
    name: string;
    class: string;
    icon: string;
    handler: Function;
    condition?: Function;
}
