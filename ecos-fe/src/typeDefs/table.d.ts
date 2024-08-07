import {
  MRT_Cell,
  MRT_Column,
  MRT_ColumnDef,
  MRT_Header,
  MRT_Row,
  MRT_RowData,
  MRT_TableInstance,
  MRT_TableOptions,
} from "material-react-table";

export interface tableProps<TData extends MRT_RowData>
  extends MRT_TableOptions<TData> {
  columns: MRT_ColumnDef<TData>[];
  data: TData[];
  label: string;
  pinningCols?: string[];
}

export interface tableCellProps<TData extends MRT_RowData> {
  cell: MRT_Cell<TData, unknown>;
  column: MRT_Column<TData>;
  renderedCellValue: React.ReactNode;
  row: MRT_Row<TData>;
  rowRef?: React.RefObject<HTMLTableRowElement> | undefined;
  table: MRT_TableInstance<TData>;
}
export interface iconHeaderTypes<TData extends MRT_RowData> {
  tableProps: {
    column: MRT_Column<TData, unknown>;
    header: MRT_Header<TData>;
    table: MRT_TableInstance<TData>;
  };
  Icon: React.ElementType;
}

export type rowActionType = {
  label: string;
  activeLabel: string;
  Icon: React.ElementType;
  ActiveIcon: React.ElementType;
  color?: string;
  type: "DD" | "AD" | "CD";
  key:
    | keyof bookUserActionType
    | keyof bookClubAdminActionType
    | keyof adminActionType
    | string;
};