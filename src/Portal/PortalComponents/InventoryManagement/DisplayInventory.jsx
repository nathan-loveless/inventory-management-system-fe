import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { activeUsersStyles } from "../../../materialui/styles/activeUsersStyles";
import PortalToolbar from "../PortalToolbar";
import EditingButtons from "./EditingButtons";
import { filteredUsers, filteredInventory } from "../../../utils/filterUsers";

const DisplayInventory = props => {
  const classes = activeUsersStyles();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    setInventory([
      filteredInventory(props.users, props.sortedData, props.searchData)
    ]);
  }, [props.inventory, props.sortedData, props.searchData]);

  return (
    <>
      {inventory.map(inv =>
        inv.map(item => (
          <Grid container spacing={0} className={classes.grid}>
            <Grid item xs className={classes.gridItem}>
              {inventory.name}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              {`$${inventory.price}`}
            </Grid>
            <Grid item xs={3} className={classes.gridItem}>
              {inventory.inStock}
            </Grid>
            <EditingButtons
              inventory={inv}
              submitEditedData={props.submitEditedData}
              submitDelete={props.submitDelete}
            />
          </Grid>
        ))
      )}
    </>
  );
};

const mapStateToProps = state => ({
  inventory: state.inventory
});

export default connect(mapStateToProps, {})(DisplayInventory);
