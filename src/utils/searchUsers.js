export const searchUsers = (data, search) => {
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

export const searchInventory = (data, search) => {
  if (search === "") {
    return data;
  }

  console.log(data, search);

  let searchData = data.filter(inv => {
    if (inv !== "") {
      return (
        inv.name.toLowerCase().includes(search.toLowerCase()) ||
        inv.price
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        inv.inStock
          .toString()
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        inv.sku.toLowerCase().includes(search.toLowerCase()) ||
        inv.supplier.toLowerCase().includes(search.toLowerCase()) ||
        inv.status.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      return;
    }
  });

  return searchData;
};
