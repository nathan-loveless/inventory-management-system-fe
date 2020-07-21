import React from "react";
import { portalMainStyles } from "../../materialui/styles/portalMainStyles";

const PortalMain = props => {
  const classes = portalMainStyles();

  return <div className={classes.root}>{props.component}</div>;
};

export default PortalMain;
