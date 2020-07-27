import React, { useState } from "react";
import PortalNav from "./PortalNav/PortalNav";
import PortalMain from "./PortalMain/PortalMain";
import Dashboard from "./PortalComponents/Dashboard";
import { portalStyles } from "../materialui/styles/portalStyles";
import InventoryManagement from "./PortalComponents//InventoryManagement/InventoryManagement";
import Invoicing from "./PortalComponents/Invoicing";
import Reports from "./PortalComponents/Reports";
import Administration from "./PortalComponents/Administration/Administration";

const Portal = () => {
  const [component, setComponent] = useState(<Dashboard />);

  const classes = portalStyles();

  const changeComponent = component => {
    switch (component) {
      case "dashboard": {
        setComponent(<Dashboard />);
        break;
      }

      case "inventorymanagement": {
        setComponent(<InventoryManagement />);
        break;
      }

      case "invoicing": {
        setComponent(<Invoicing />);
        break;
      }

      case "reports": {
        setComponent(<Reports />);
        break;
      }

      case "administration": {
        setComponent(<Administration />);
        break;
      }

      default: {
        setComponent(<Dashboard />);
        break;
      }
    }
  };

  return (
    <>
      <div className={classes.root}>
        <PortalNav changeComponent={changeComponent} />
        <PortalMain component={component} />
      </div>
    </>
  );
};

export default Portal;
