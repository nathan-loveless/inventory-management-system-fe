import React, { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import OpenDialog from "./OpenDialog";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";

// These are the index arrays of the

const EditingButtons = props => {
  const [openClicked, setOpenClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);

  const handleOpenClicked = (event, e) => {
    console.log(
      "NL: EditingButtons.jsx: handleOpenClicked props.user: ",
      props.user
    );
    setOpenClicked(!openClicked);
  };

  const handleEditClicked = () => {
    setOpenClicked(!openClicked);
  };

  const handleDeleteClicked = () => {
    setOpenClicked(!openClicked);
  };

  return (
    <>
      <ButtonGroup onClick={handleOpenClicked}>
        <IconButton>
          <OpenInBrowserIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteForeverIcon />
        </IconButton>
      </ButtonGroup>
      {openClicked && (
        <OpenDialog
          handleOpenClicked={handleOpenClicked}
          openClicked={openClicked}
          user={props.user}
        />
      )}
      {editClicked && (
        <EditDialog
          handleEditClicked={handleEditClicked}
          editClicked={editClicked}
          users={props.users}
        />
      )}
      {deleteClicked && (
        <DeleteDialog
          handleDeletetClicked={handleDeleteClicked}
          DleteClicked={deleteClicked}
          users={props.users}
        />
      )}
    </>
  );
};

export default EditingButtons;
