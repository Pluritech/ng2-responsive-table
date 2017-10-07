export interface TableContent {
    columns: TableColumn[];
    rows: TableRow[];
    actions: TableButton[];
    noRowsMsg?: string;
    hasInfoInLine?: boolean;
    showCloseBtnInLine?: boolean;
    classIconCloseInLine?: string;
}

export interface TableRow {
    data: any;
    infoInline?: string;
    infoStatus?: boolean;
    color?: string;
}

export interface TableColumn {
    name: string;
    id: string;
    checkbox?: TableCheckbox;
    hasCustomColor?: true;
}

export interface TableButton {
    name: string;
    class: string;
    icon: string;
    handler(row: any): void;
    condition?(row: any): boolean;
    disabled?(row: any): boolean;
}

export interface TableCheckbox {
    singleName?: string;
}
