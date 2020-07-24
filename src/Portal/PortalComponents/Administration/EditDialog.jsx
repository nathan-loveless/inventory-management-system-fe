import React from "react";
import Dialog from "@material-ui/core/Dialog";

const EditDialog = props => {
  const handleEditClosed = () => {};
  return (
    <Dialog onClose={handleEditClosed} open={props.editClicked}>
      This is a dialog
    </Dialog>
  );
};

export default EditDialog;
