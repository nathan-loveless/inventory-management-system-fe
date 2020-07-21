import React from "react";
import { portalNavStyles } from "../../materialui/styles/portalNavStyles";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const PortalNav = props => {
  const classes = portalNavStyles();

  const updateComponent = e => {
    props.changeComponent(e.currentTarget.value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            value="dashboard"
            onClick={updateComponent}
            className={classes.button}
          >
            Dashboard
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            value="inventorymanagement"
            onClick={updateComponent}
            className={classes.button}
          >
            Inventory Management
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            value="invoicing"
            onClick={updateComponent}
            className={classes.button}
          >
            Invoicing
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            value="reports"
            onClick={updateComponent}
            className={classes.button}
          >
            Reports
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            value="administration"
            onClick={updateComponent}
            className={classes.button}
          >
            Administration
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PortalNav;
