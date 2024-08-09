import * as React from "react";

import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ExtensionOffRoundedIcon from "@mui/icons-material/ExtensionOffRounded";

import { AppChips, ExtensionActions, LocalHeader } from "../../atoms/AppAtoms";
import { extensions } from "../../styles/extensions.s";
import { ExtensionAPI } from "../../redux/services/APIService";

const Extensions = () => {
  const admin = true;
  const { isLoading, isSuccess, data } = ExtensionAPI.useGetExtensionsQuery({});

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
  if (isLoading) {
    return <Box>Loading... please wait</Box>;
  }
  if (isSuccess)
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
            spacing={{ xs: 1, md: "12px" }}
            sx={{ overflow: "scroll" }}
          >
            {data.map((item, index) => {
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
                  <Paper
                    key={`extension-${index}`}
                    sx={extensions.item({ check: disabled })}
                  >
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
        </Box>
      </Stack>
    );
};

export default Extensions;
