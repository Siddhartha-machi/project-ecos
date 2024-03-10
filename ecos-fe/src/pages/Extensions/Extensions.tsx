import * as React from "react";

import { Box, Grid, Stack, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ExtensionOffRoundedIcon from "@mui/icons-material/ExtensionOffRounded";

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
          { id: "1", title: "Todos - 1", meta: { added: true } },
          { id: "5", title: "Todos - 5", meta: { added: true } },
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
          "Add any extension that suits or remove that doesn't suits your requirements!"
        }
        options={options}
      />
      <Box sx={extensions.content}>
        <Grid
          container
          spacing={{ xs: 1, md: 1.5 }}
          sx={{ overflow: "scroll" }}
        >
          {state.extensions.map((item, index) => {
            const disabled = item.meta.disabled;
            return (
              <Grid
                item
                xs={12}
                sm={8}
                md={4}
                lg={3}
                key={`extension-${index}`}
              >
                <Box sx={extensions.item({ check: disabled })}>
                  {item.image ? (
                    <Box
                      component={"img"}
                      sx={extensions.img({ check: disabled })}
                      src={item.image}
                    />
                  ) : item.meta.disabled ? (
                    <ExtensionOffRoundedIcon sx={extensions.fallBackIcon} />
                  ) : (
                    <ExtensionRoundedIcon sx={extensions.fallBackIcon} />
                  )}
                  <Box sx={extensions.right}>
                    <Box sx={extensions.rightTop}>
                      <Typography sx={extensions.title}>
                        {item.title}
                      </Typography>
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
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
};

export default Extensions;
