import * as React from "react";

import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import {
  AppButton,
  AppChips,
  ExtensionActions,
  LocalHeader,
} from "../../atoms/AppAtoms";
import { extensions } from "../../styles/extensions";
import data from "../../../public/mocks/extensions.json";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ROLES } from "../../global/constants";
import { setLocalLoading } from "../../redux/slices/appSlice";
import { loadExtensionsData } from "../../redux/slices/extensionSlice";

const Extensions = () => {
  const dispatch = useAppDispatch();
  const admin = useAppSelector(
    (store) => store.user.currentUser.role === ROLES.admin
  );
  const state = useAppSelector((store) => store.extension);
  const options = React.useMemo(
    () => [
      {
        label: "Filter",
        Icon: FilterAltRoundedIcon,
      },
      {
        label: "Your extensions",
        Icon: ReorderRoundedIcon,
      },
      {
        label: "Add new extension",
        Icon: AddRoundedIcon,
      },
    ],
    []
  );

  const apiSimulator = React.useCallback(async () => {
    dispatch(setLocalLoading({ loadVal: true, label: "extensions" }));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    dispatch(
      loadExtensionsData({
        userExtensions: [
          { id: "1", title: "Todos - 1" },
          { id: "5", title: "Todos - 5" },
        ],
        extensions: data,
      })
    );
    dispatch(setLocalLoading({ loadVal: false, label: null }));
  }, [dispatch]);

  React.useEffect(() => {
    apiSimulator();
  }, [apiSimulator]);

  return (
    <Stack sx={extensions.container}>
      <LocalHeader
        pageTitle={"Extensions"}
        pageCaption={
          "Add or remove any extension that suits or not suits your requirements!"
        }
        options={options}
      />
      <Box sx={extensions.content}>
        <Grid container sx={{ overflow: "scroll" }}>
          {state.extensions.map((item, index) => (
            <Grid item xs={12} sm={8} md={4} lg={3} key={`extension-${index}`}>
              <Paper
                elevation={6}
                sx={extensions.item({ check: item.meta.disabled })}
              >
                {item.image ? (
                  <Box component={"img"} sx={extensions.img} src={item.image} />
                ) : (
                  <ExtensionRoundedIcon sx={extensions.fallBackIcon} />
                )}
                <Box sx={extensions.right}>
                  <Box sx={extensions.rightTop}>
                    <Typography sx={extensions.title}>{item.title}</Typography>
                    <ExtensionActions
                      data={item}
                      privileged={admin}
                      itemIndex={index}
                    />
                  </Box>
                  <Typography sx={extensions.description}>
                    {item.description}
                  </Typography>
                  <AppChips data={item.tags} maxChips={2} />
                  <AppButton
                    disableRipple
                    sx={extensions.seeMore}
                    endIcon={<ArrowForwardRoundedIcon />}
                  >
                    See more
                  </AppButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};

export default Extensions;
