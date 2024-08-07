import React from "react";

import { Box, Typography } from "@mui/material";
import { MRT_RowData } from "material-react-table";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";

import { iconHeaderTypes, tableCellProps } from "../../typeDefs/table";
import { user } from "../../typeDefs/user";
import { userStyles } from "../../styles/table.s";

export const Header = (props: iconHeaderTypes<user>) => {
  const header = props.tableProps.column.columnDef.header;
  return (
    <Box sx={userStyles.headerCell}>
      <props.Icon />
      {header}
    </Box>
  );
};

export const UserEmail = <TData extends MRT_RowData>(
  props: tableCellProps<TData>
) => {
  const email = props.renderedCellValue;
  return <Box sx={userStyles.cellWrapper}>{email}</Box>;
};

export const UserActive = <TData extends MRT_RowData>(
  props: tableCellProps<TData>
) => {
  const active = props.renderedCellValue;
  return (
    <Box
      sx={{
        ...userStyles.cellWrapper,
        ...userStyles.userActive({ check: active as boolean }),
      }}
    >
      {active ? "Active" : "Inactive"}
    </Box>
  );
};

export const UserRole = <TData extends MRT_RowData>(
  props: tableCellProps<TData>
) => {
  const role = props.renderedCellValue;
  const setting = React.useMemo(() => {
    if (role === "admin") {
      return {
        Icon: AdminPanelSettingsRoundedIcon,
        role: "Admin",
        color: "success.light",
      };
    } else if (role === "club_admin") {
      return {
        Icon: SupervisedUserCircleRoundedIcon,
        role: "Club Admin",
        color: "secondary.light",
      };
    } else {
      return {
        Icon: VerifiedUserRoundedIcon,
        role: "User",
        color: "info.light",
      };
    }
  }, [role]);
  return (
    <Box sx={userStyles.cellWrapper}>
      <setting.Icon sx={{ color: setting.color }} />
      <Typography sx={userStyles.role({ value: setting.color })}>
        {setting.role}
      </Typography>
    </Box>
  );
};
