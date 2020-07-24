import React from "react";
import { portalToolbarStyles } from "../../materialui/styles/portalToolbarStyles";

const PortalToolbar = () => {
  const classes = portalToolbarStyles();

  return <div className={classes.root}></div>;
};

export default PortalToolbar;
