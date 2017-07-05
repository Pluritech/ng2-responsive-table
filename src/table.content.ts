export interface TableContent {
    columns: TableColumn[];
    rows: any[];
    actions: TableButton[];
    noRowsMsg?: string;
}

export interface TableColumn {
    name: string;
    id: string;
    checkbox?: TableCheckbox;
}

export interface TableButton {
    name: string;
    class: string;
    icon: string;
    handler(row: any): void;
    condition?(row: any): boolean;
}

export interface TableCheckbox {
    singleName?: string;
}
