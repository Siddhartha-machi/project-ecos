import { DialogTitle, DialogContent, DialogContentText, Button, Typography, Box, Paper } from "@mui/material";
import React from "react";
import { AppDialog } from "../../atoms/AppAtoms";

const Overview = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button  variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <AppDialog
        open={open}
        closeHandler={handleClose}
        enableResizing={true}
        title={"Add a task"}
        actions={[
          { label: "Submit", handler: () => {} },
          { label: "Cancel", handler: () => {} },
        ]}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent sx={{ height: "500px" }}>
          <DialogContentText>To subscribe to this website, please enter your email address here. We will send updates occasionally.</DialogContentText>
        </DialogContent>
      </AppDialog>
      <Paper>
        <Typography>test text</Typography>
      </Paper>
    </div>
  );
};

export default Overview;
