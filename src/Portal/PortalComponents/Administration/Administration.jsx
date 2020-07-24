import React, { useState } from "react";
import { connect } from "react-redux";
import { AppBar, CssBaseline } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { administrationStyles } from "../../../materialui/styles/administrationStyles";
import DisplayUsers from "./DisplayUsers";
import AdministrationHeader from "./AdministrationHeader";

const Administration = props => {
  const [value, setValue] = useState(0);
  const [allUsers] = useState([
    props.activeUsers,
    props.inactiveUsers,
    props.pendingUsers
  ]);

  const classes = administrationStyles();

  const handleChange = newValue => {
    setValue(newValue);
  };
  return (
    <>
      <AdministrationHeader handleChange={handleChange} value={value} />

      {value === 0 && (
        <DisplayUsers
          users={[props.activeUsers, props.inactiveUsers, props.pendingUsers]}
        />
      )}
      {value !== 0 && <DisplayUsers users={[allUsers[value - 1]]} />}
    </>
  );
};

const mapStateToProps = state => ({
  activeUsers: state.activeUsers,
  inactiveUsers: state.inactiveUsers,
  pendingUsers: state.pendingUsers
});

export default connect(mapStateToProps, {})(Administration);
