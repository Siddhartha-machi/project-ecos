import * as React from "react";

import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ExtensionOffRoundedIcon from "@mui/icons-material/ExtensionOffRounded";

import {
  AppChips,
  AppSkeletons,
  ExtensionActions,
  LocalHeader,
} from "../../atoms/AppAtoms";
import { extensions } from "../../styles/extensions.s";
import { extensionType } from "../../typeDefs/extension";
import { ExtensionAPI } from "../../redux/services/APIService";

const dataFetcher = ExtensionAPI.useGetExtensionsQuery;

const Extensions = () => {
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
  const admin = true;
  const { isLoading, isError, data } = dataFetcher({});

  // private components
  const _Skeleton = React.useMemo(() => {
    return Array.from(Array(5)).map((_, i) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={`data-skel-${i}`}>
        <Box sx={extensions.skGridItem}>
          <AppSkeletons type={"avatar"} />
          <Box sx={extensions.skGridItemRight}>
            <AppSkeletons type={"title"} />
            <AppSkeletons type={"text"} />
            <Box sx={{ display: "flex", gap: 1 }}>
              <AppSkeletons type={"chip"} />
              <AppSkeletons type={"chip"} />
              <AppSkeletons type={"chip"} />
            </Box>
            <AppSkeletons type={"textButton"} />
          </Box>
        </Box>
      </Grid>
    ));
  }, []);

  // --- fix
  // const status = React.useMemo(() => {
  //   let _status;
  //   if (error && 'data' in error) {
  //     _status = statusCodeToMessage(error.status, "extension");
  //   }
  //   return _status;
  // }, [error]);

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
        {isLoading ? (
          <Grid
            container
            spacing={{ xs: 1, md: "12px" }}
            sx={extensions.gridContainer}
          >
            {_Skeleton}
          </Grid>
        ) : isError ? (
          <Box sx={{}}>
            <Typography>Something went wrong...</Typography>
          </Box>
        ) : (
          <Grid
            container
            spacing={{ xs: 1, md: "12px" }}
            sx={extensions.gridContainer}
          >
            {(data as extensionType[]).map((item, index) => {
              const disabled = item.meta.disabled;
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={`extension-${index}`}
                >
                  <Paper sx={extensions.item({ check: disabled })}>
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
                        <ExtensionActions data={item} privileged={admin} />
                      </Box>
                      <Typography sx={extensions.description}>
                        {item.description}
                      </Typography>
                      <AppChips data={item.tags} maxChips={2} />
                      <Button
                        variant="text"
                        disabled={disabled}
                        sx={extensions.seeMore}
                        endIcon={<ArrowForwardRoundedIcon />}
                      >
                        See more
                      </Button>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </Stack>
  );
};

export default Extensions;
