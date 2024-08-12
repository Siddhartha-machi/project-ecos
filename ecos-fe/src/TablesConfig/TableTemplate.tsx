import { MRT_RowData, MaterialReactTable } from "material-react-table";
import { Typography } from "@mui/material";
import { tableProps } from "../typeDefs/table";
import { tableStyles } from "../styles/table.s";
import theme from "../global/theme";

export const TableTemplate = <TData extends MRT_RowData>(
  props: tableProps<TData>
) => {
  const { data, columns, pinningCols, label } = props;
  return (
    <MaterialReactTable
      key={`table-${label}`}
      enableColumnActions={false}
      enableColumnFilters={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      enableFilters={false}
      enableSorting={false}
      enableStickyHeader
      enablePinning
      enablePagination={true}
      // editDisplayMode="table"
      renderEmptyRowsFallback={() => (
        <Typography sx={{ textAlign: "center", py: 2 }}>
          No {label} to show
        </Typography>
      )}
      // renderDetailPanel={() => {
      //   return (
      //     <Box
      //       sx={{
      //         display: "flex",
      //         height: 300,
      //         alignItems: "center",
      //         justifyContent: "center",
      //       }}
      //     >
      //       <CircularProgress />
      //     </Box>
      //   );
      // }}
      // muiTableBodyProps={{
      //   sx: {
      //     // height: "100vh",
      //     bgcolor: "red", //theme.primaryBgc,
      //     // py: 1,
      //     // position: "absolute",
      //     // inset: 0,
      //   },
      // }}
      muiTableBodyProps={{
        sx: {
          // position: "absolute",
          // inset: 0,
          bgcolor: "yellow",
          "tr:last-child": {
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
          },
        },
      }}
      muiTableContainerProps={{
        sx: tableStyles.tableContainer,
      }}
      // muiTableHeadRowProps={{
      //   sx: {
      //     bgcolor: "transparent",
      //     // border: `1px solid ${theme.black10}`,
      //     borderColor: "red",
      //   },
      // }}
      // muiTableHeadCellProps={{
      //   align: "center",
      //   sx: {
      //     fontWeight: "bold",
      //     // bgcolor: theme.black5,
      //     color: "#fff",
      //     // borderColor: "red",

      //     // borderTop: `1px solid ${theme.black10}`,
      //     // borderBottom: `1px solid ${theme.black10}`,
      //     // "&:last-child": {
      //     //   borderRight: `1px solid ${theme.black10}`,
      //     // },
      //     // "&:first-child": {
      //     //   borderLeft: `1px solid ${theme.black10}`,
      //     // },
      //   },
      // }}
      muiTableBodyRowProps={{
        hover: false,
        sx: {
          // backgroundColor: "pink",
          // tr:first-child td:first-child { border-top-left-radius: 10px; }
          // tr:first-child td:last-child { border-top-left-radius: 10px; }
          // tr:last-child td:first-child { border-top-left-radius: 10px; }
          // tr:last-child td:last-child { border-top-left-radius: 10px; }
          // position: "relative",

          // borderRadius: theme.borderRadius,
          "&:Hover": {
            // transform: "scale(1.01)",
            // boxShadow: "0 0px 30px 0px rgba(0,0,0,1)",
          },
        },
      }}
      muiTableBodyCellProps={{
        align: "center",
        sx: {
          // borderRadius: theme.borderRadius,
          // borderTop: `1px solid ${theme.black10}`,
          // bgcolor: "blue",
          border: "none",
          "&:first-of-type": {
            borderTopLeftRadius: theme.borderRadius,
            borderBottomLeftRadius: theme.borderRadius,
          },
          "&:last-child": {
            borderTopRightRadius: theme.borderRadius,
            borderBottomRightRadius: theme.borderRadius,
          },
        },
      }}
      muiTablePaperProps={{
        elevation: 0,
        sx: {
          backgroundColor: "transparent",
          border: "1px solid transparent",
          // borderColor: theme.borderColor,
          // p: 1,
        },
      }}
      data={data}
      columns={columns}
      initialState={{
        columnPinning: {
          left: pinningCols,
        },
      }}
    />
  );
};
