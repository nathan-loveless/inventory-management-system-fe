import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  addInventory,
  updateInventory,
  deleteInventory
} from "../../../actions/actions";
import { administrationStyles } from "../../../materialui/styles/administrationStyles";
import DisplayInventory from "./DisplayInventory";
import InventoryHeader from "./InventoryHeader";

const InventoryManagement = props => {
  const [sortedData, setSortedData] = useState("");
  const [searchData, setSearchData] = useState("");

  const classes = administrationStyles();

  const submitEditedData = (data, id, prevStatus) => {
    props.updateUser({
      id: id,
      name: data.username,
      inStock: data.inStock,
      price: data.price
    });
  };

  const submitDelete = id => {
    props.deleteUser(id);
  };

  const applySortedData = choice => {
    setSortedData(choice);
  };

  const handleSearch = text => {
    setSearchData(text);
  };

  return (
    <>
      <InventoryHeader
        applySortedData={applySortedData}
        handleSearch={handleSearch}
      />
      <DisplayInventory
        submitEditedData={submitEditedData}
        submitDelete={submitDelete}
        sortedData={sortedData}
        searchData={searchData}
      />
    </>
  );
};

const mapStateToProps = state => ({
  inventory: state.inventory
});

export default connect(mapStateToProps, {
  addInventory,
  updateInventory,
  deleteInventory
})(InventoryManagement);
