import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const DeleteDialog = props => {
  const handleDeleteClosed = () => {};
  return (
    <Dialog onClose={handleDeleteClosed} open={props.deleteClicked}>
      This is a dialog
    </Dialog>
  );
};

export default DeleteDialog;
