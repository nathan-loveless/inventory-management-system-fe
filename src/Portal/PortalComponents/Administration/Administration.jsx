import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateUser, deleteUser } from "../../../actions/actions";
import { administrationStyles } from "../../../materialui/styles/administrationStyles";
import DisplayUsers from "./DisplayUsers";
import AdministrationHeader from "./AdministrationHeader";

const Administration = props => {
  const [value, setValue] = useState(0);
  const [sortedData, setSortedData] = useState("");
  const [searchData, setSearchData] = useState("");

  const classes = administrationStyles();

  const handleChange = newValue => {
    setValue(newValue);
  };

  const submitEditedData = (data, id, prevStatus) => {
    props.updateUser(
      {
        id: id,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode,
        status: data.status,
        role: data.role
      },
      prevStatus
    );
  };

  const submitDelete = id => {
    props.deleteUser(id);
  };

  const applySortedData = choice => {
    setSortedData(choice);
    console.log("Tab Value", value);
  };

  const handleSearch = text => {
    setSearchData(text);
  };

  return (
    <>
      <AdministrationHeader
        handleChange={handleChange}
        value={value}
        applySortedData={applySortedData}
        handleSearch={handleSearch}
      />
      <DisplayUsers
        value={value}
        submitEditedData={submitEditedData}
        submitDelete={submitDelete}
        sortedData={sortedData}
        searchData={searchData}
      />
    </>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { updateUser, deleteUser })(
  Administration
);
