import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import ActiveUsers from "./ActiveUsers";
import InactiveUsers from "./InactiveUsers";
import PendingUsers from "./PendingUsers";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`administration-tabpanel-${index}`}
      aria-labelledby={`administration-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `administration-tab-${index}`,
    "aria-controls": `administration-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

const Administration = () => {
  const [value, setValue] = useState(0);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position="static">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="administration tabs"
      >
        <Tab label="Active Users" {...a11yProps(0)} />
        <Tab label="Inactive Users" {...a11yProps(1)} />
        <Tab label="Pending Users" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ActiveUsers />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InactiveUsers />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PendingUsers />
      </TabPanel>
    </AppBar>
  );
};

export default Administration;
