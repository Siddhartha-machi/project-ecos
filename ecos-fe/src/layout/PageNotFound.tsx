import { Box, Typography } from "@mui/material";
import { pageNotFound } from "../styles/layout";
import { useLocation } from "react-router";

const PageNotFound = (props: { auth?: boolean }) => {
  const location = useLocation().pathname;
  return (
    <Box sx={pageNotFound.container}>
      <Typography>
        {props.auth ? "Auth : " : "General : "}Oops! no page found at path{" "}
        {location}{" "}
      </Typography>
    </Box>
  );
};

export default PageNotFound;
