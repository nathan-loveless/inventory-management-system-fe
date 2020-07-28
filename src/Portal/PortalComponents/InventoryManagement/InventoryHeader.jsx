import React, { useState } from "react";
import { AppBar, Menu, MenuItem } from "@material-ui/core";
import { administrationStyles } from "../../../materialui/styles/administrationStyles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import CreateDialog from "./CreateDialog";

const InventoryHeader = props => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [createClicked, setCreateClicked] = useState(false);

  const classes = administrationStyles();

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

  const handleCreateClicked = () => {
    setCreateClicked(!createClicked);
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
        <Grid container spacing={0} className={classes.createGrid}>
          <Grid item xs={2} className={classes.dontKnow}>
            <Button
              variant="contained"
              className={classes.createButton}
              onClick={handleCreateClicked}
              endIcon={<AddIcon></AddIcon>}
            >
              Create
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={0} className={classes.grid}>
          <Grid item xs={5} className={classes.searchGrid}>
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
              <MenuItem value="name-ascending" onClick={handleMenuClicked}>
                Name: Ascending
              </MenuItem>
              <MenuItem value="name-descending" onClick={handleMenuClicked}>
                Name: Descending
              </MenuItem>
              <MenuItem value="sku-ascending" onClick={handleMenuClicked}>
                SKU: Ascending
              </MenuItem>
              <MenuItem value="sku-descending" onClick={handleMenuClicked}>
                SKU: Descending
              </MenuItem>
              <MenuItem value="supplier-ascending" onClick={handleMenuClicked}>
                Supplier: Ascending
              </MenuItem>
              <MenuItem value="supplier-descending" onClick={handleMenuClicked}>
                Supplier: Descending
              </MenuItem>
              <MenuItem value="price-ascending" onClick={handleMenuClicked}>
                Price: Ascending
              </MenuItem>
              <MenuItem value="price-descending" onClick={handleMenuClicked}>
                Price: Descending
              </MenuItem>
              <MenuItem value="instock-ascending" onClick={handleMenuClicked}>
                In-Stock: Ascending
              </MenuItem>
              <MenuItem value="instock-descending" onClick={handleMenuClicked}>
                In-Stock: Descending
              </MenuItem>
              <MenuItem value="status-ascending" onClick={handleMenuClicked}>
                Status: Ascending
              </MenuItem>
              <MenuItem value="status-descending" onClick={handleMenuClicked}>
                Status: Descending
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </AppBar>
      {createClicked && (
        <CreateDialog
          handleCreateClicked={handleCreateClicked}
          createClicked={createClicked}
          submitCreatedData={props.submitCreatedData}
        />
      )}
    </div>
  );
};

export default InventoryHeader;
