const searchUsers = (data, search) => {
  console.log("NL: searchUsers.js: searchUsrs: data: ", data);
  console.log("NL: searchUsers.js: searchUsrs: search: ", search);
  if (search === "") {
    return data;
  }

  let searchData = data.filter(user => {
    if (user !== "") {
      return (
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.address.toLowerCase().includes(search.toLowerCase()) ||
        user.city.toLowerCase().includes(search.toLowerCase()) ||
        user.state.toLowerCase().includes(search.toLowerCase()) ||
        user.zipcode.toLowerCase().includes(search.toLowerCase()) ||
        user.status.toLowerCase().includes(search.toLowerCase()) ||
        user.role.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return;
    }
  });

  return searchData;
};

export default searchUsers;
