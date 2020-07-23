import React, { useState } from "react";
import { connect } from "react-redux";
import { AppBar } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { administrationStyles } from "../../../materialui/styles/administrationStyles";
import DisplayUsers from "./DisplayUsers";

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
      {value === index && <Typography component={"div"}>{children}</Typography>}
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

const Administration = props => {
  const [value, setValue] = useState(0);
  const [allUsers, setAllUsers] = useState([
    props.activeUsers,
    props.inactiveUsers,
    props.pendingUsers
  ]);

  const classes = administrationStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position="static">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="administration tabs"
        className={classes.menuBar}
      >
        <Tab label="All Users" {...a11yProps(0)} />
        <Tab label="Active Users" {...a11yProps(1)} />
        <Tab label="Inactive Users" {...a11yProps(2)} />
        <Tab label="Pending Users" {...a11yProps(3)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <div className={classes.tabContainer}></div>
        <DisplayUsers
          users={[props.activeUsers, props.inactiveUsers, props.pendingUsers]}
        />
      </TabPanel>
      {allUsers.map((users, i) => (
        <TabPanel value={value} index={i + 1}>
          <DisplayUsers users={[users]} />
        </TabPanel>
      ))}
    </AppBar>
  );
};

const mapStateToProps = state => ({
  activeUsers: state.activeUsers,
  inactiveUsers: state.inactiveUsers,
  pendingUsers: state.pendingUsers
});

export default connect(mapStateToProps, {})(Administration);
