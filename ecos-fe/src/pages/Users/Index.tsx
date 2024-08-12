import React from "react";

import { Box } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

import { TableTemplate } from "../../TablesConfig/TableTemplate";
import userTableConfig from "../../TablesConfig/userTableConfig";
import { LocalHeader } from "../../atoms/AppAtoms";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { tableStyles } from "../../styles/table.s";
import Transaction from "../../services/Transaction";
import { setLocalLoading } from "../../redux/slices/appSlice";
import { loadFunArgs } from "../../typeDefs/helpers";
import { setUsersList } from "../../redux/slices/userSlice";

export const UsersList = () => {
  const dispatch = useAppDispatch();
  const columns = React.useMemo(() => userTableConfig, []);
  //   const dispatch = useAppDispatch();
  const { usersList } = useAppSelector((store) => store.user);

  const options = React.useMemo(
    () => [
      {
        label: "Filter",
        Icon: FilterAltRoundedIcon,
      },
      {
        label: "Add User",
        Icon: AddRoundedIcon,
      },
      {
        label: "Import users",
        Icon: BackupRoundedIcon,
      },
    ],
    []
  );

  const loading = React.useCallback(
    (args: loadFunArgs) => {
      dispatch(setLocalLoading(args));
    },
    [dispatch]
  );

  const loadUsers = React.useCallback(
    (data: unknown) => {
      dispatch(setUsersList(data));
    },
    [dispatch]
  );

  React.useEffect(() => {
    // if (usersList.length < 1) {
    (async function () {
      const transaction = new Transaction();
      transaction.mock = true;
      transaction.path = "users";
      transaction.loading = loading;
      transaction.onSuccess = loadUsers;
      await transaction.execute();
    })();
    // }
  }, [dispatch, loadUsers, loading]);

  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <LocalHeader
        pageTitle={"Registered Users"}
        pageCaption={
          "Browse through the users list and edit details and permission."
        }
        options={options}
      />
      <Box sx={tableStyles.tableWrapper}>
        <TableTemplate
          label="Users"
          columns={columns}
          data={usersList}
          pinningCols={["email"]}
        />
      </Box>
    </Box>
  );
};
