import React, { useState } from "react";
import { AppBar } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { administrationStyles } from "../../../materialui/styles/administrationStyles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const AdministrationHeader = props => {
  const [value, setValue] = useState(0);

  const classes = administrationStyles();

  const handleChange = (event, newValue) => {
    props.handleChange(newValue);
  };
  return (
    <div className={classes.menuBarMain}>
      <AppBar position="static" className={classes.menuBar}>
        <Tabs
          value={props.value}
          onChange={handleChange}
          aria-label="administration tabs"
          className={classes.menuBar}
        >
          <Tab label="All Users" id={0} />
          <Tab label="Active Users" id={1} />
          <Tab label="Inactive Users" id={2} />
          <Tab label="Pending Users" id={3} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Tabs>
      </AppBar>
    </div>
  );
};

export default AdministrationHeader;
