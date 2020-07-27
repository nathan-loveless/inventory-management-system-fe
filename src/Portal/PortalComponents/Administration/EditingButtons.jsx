import React, { useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import OpenDialog from "./OpenDialog";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";
import { Tooltip } from "@material-ui/core";

// These are the index arrays of the

const EditingButtons = props => {
  const [openClicked, setOpenClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);

  const handleOpenClicked = e => {
    setOpenClicked(!openClicked);
  };

  const handleEditClicked = () => {
    setEditClicked(!editClicked);
  };

  const handleDeleteClicked = () => {
    setDeleteClicked(!deleteClicked);
  };

  return (
    <>
      <ButtonGroup>
        <Tooltip title="View">
          <IconButton onClick={handleOpenClicked}>
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton onClick={handleEditClicked}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={handleDeleteClicked}>
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
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
          submitEditedData={props.submitEditedData}
          user={props.user}
        />
      )}
      {deleteClicked && (
        <DeleteDialog
          handleDeleteClicked={handleDeleteClicked}
          deleteClicked={deleteClicked}
          submitDelete={props.submitDelete}
          user={props.user}
        />
      )}
    </>
  );
};

const mapStateToProps = state => ({});

export default EditingButtons;
