import { Box, Typography } from "@mui/material";
import { pageNotFound } from "../styles/layout.s";
import { useLocation } from "react-router";

const UnderProgress = (props: { auth?: boolean }) => {
  const location = useLocation().pathname;
  return (
    <Box sx={pageNotFound.container}>
      <Typography>
        {props.auth ? "Auth : " : "General : "} page: " {location} " you are
        looking for is still under progress please try again after sometime!
      </Typography>
    </Box>
  );
};

export default UnderProgress;
