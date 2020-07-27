import sortUsers from "./sortUsers";
import searchUsers from "./searchUsers";

const filterUsers = (data, value, sorted, search) => {
  console.log("filteredUsers", value);
  switch (value) {
    case 0: {
      return sortUsers(searchUsers(data, search), sorted);
    }

    case 1: {
      if (sorted != "") {
      }
      return sortUsers(
        searchUsers(
          data.filter(e => e.status === "active"),
          search
        ),
        sorted
      );
    }
    case 2: {
      return sortUsers(
        searchUsers(
          data.filter(e => e.status === "inactive"),
          search
        ),
        sorted
      );
    }
    case 3: {
      return sortUsers(
        searchUsers(
          data.filter(e => e.status === "pending"),
          search
        ),
        sorted
      );
    }
    default: {
      return sortUsers(data, sorted);
    }
  }
};

export default filterUsers;
