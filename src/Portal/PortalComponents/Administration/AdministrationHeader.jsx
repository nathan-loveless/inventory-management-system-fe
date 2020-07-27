import React, { useState } from "react";
import { AppBar, Menu, MenuItem, Icon } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { administrationStyles } from "../../../materialui/styles/administrationStyles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const AdministrationHeader = props => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const classes = administrationStyles();

  const handleChange = (event, newValue) => {
    console.log("Inside Handle Change: props.value: ", newValue);
    props.handleChange(newValue);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuClicked = event => {
    props.applySortedData(event.target.getAttribute("value"));
    handleClose();
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleSearch = e => {
    setSearchInput(e.target.value);
  };

  const searchSubmit = () => {
    props.handleSearch(searchInput);
  };

  return (
    <div className={classes.menuBarMain}>
      <AppBar position="static" className={classes.menuBar}>
        <Tabs
          value={props.value}
          onChange={handleChange}
          aria-label="administration tabs"
          className={classes.tabBar}
        >
          <Tab label="All Users" id={0} />
          <Tab label="Active Users" id={1} />
          <Tab label="Inactive Users" id={2} />
          <Tab label="Pending Users" id={3} />
        </Tabs>
        <Grid container spacing={0} className={classes.grid}>
          <Grid item xs={6} className={classes.searchG}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={handleSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>
            <Button
              variant="contained"
              className={classes.sortButton}
              onClick={searchSubmit}
            >
              Search
            </Button>
            <Button
              variant="contained"
              className={classes.sortButton}
              onClick={handleClick}
            >
              Sort
            </Button>
            <Menu
              id="sort-menu"
              anchorEl={anchorEl}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
              classes={{ paper: classes.menuTab }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem
                value="first-name-ascending"
                onClick={handleMenuClicked}
              >
                First Name: Ascending
              </MenuItem>
              <MenuItem
                value="first-name-descending"
                onClick={handleMenuClicked}
              >
                First Name: Descending
              </MenuItem>
              <MenuItem value="last-name-ascending" onClick={handleMenuClicked}>
                Last Name: Ascending
              </MenuItem>
              <MenuItem
                value="last-name-descending"
                onClick={handleMenuClicked}
              >
                Last Name: Descending
              </MenuItem>
              <MenuItem value="status-ascending" onClick={handleMenuClicked}>
                Status: Ascending
              </MenuItem>
              <MenuItem value="status-descending" onClick={handleMenuClicked}>
                Status: Descending
              </MenuItem>
              <MenuItem value="role-ascending" onClick={handleMenuClicked}>
                Role: Ascending
              </MenuItem>
              <MenuItem value="role-descending" onClick={handleMenuClicked}>
                Role: Descending
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

export default AdministrationHeader;
