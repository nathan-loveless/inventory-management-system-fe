import React from "react";
import { portalToolbarStyles } from "../../materialui/styles/portalToolbarStyles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
const PortalToolbar = () => {
  const classes = portalToolbarStyles();

  return <div className={classes.root}></div>;
};

export default PortalToolbar;
