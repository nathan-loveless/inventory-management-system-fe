import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { activeUsersStyles } from "../../../materialui/styles/activeUsersStyles";
import PortalToolbar from "../PortalToolbar";
import EditingButtons from "./EditingButtons";
import { filterInventory } from "../../../utils/filterUsers";

const DisplayInventory = props => {
  const classes = activeUsersStyles();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    setInventory([
      filterInventory(props.inventory, props.sortedData, props.searchData)
    ]);
    console.log("NL: DisplayInventory.jsx: useEffect: ", props.inventory);
  }, [props.inventory, props.sortedData, props.searchData]);

  return (
    <>
      {inventory.map(inv =>
        inv.map(item => (
          <Grid container spacing={0} className={classes.grid}>
            <Grid item xs className={classes.gridItem}>
              {item.name}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              {item.sku}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              {item.supplier}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              {`$${item.price}`}
            </Grid>
            <Grid item xs={3} className={classes.gridItem}>
              {item.inStock}
            </Grid>
            <Grid item xs className={classes.gridItem}>
              {item.status}
            </Grid>
            <EditingButtons
              inventory={item}
              submitEditedData={props.submitEditedData}
              submitDelete={props.submitDelete}
              submitCreatedData={props.submitCreatedData}
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
