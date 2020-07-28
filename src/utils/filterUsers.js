import { sortUsers, sortInventory } from "./sortUsers";
import { searchUsers, searchInventory } from "./searchUsers";

export const filterUsers = (data, value, sorted, search) => {
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

export const filterInventory = (data, sorted, search) => {
  return sortInventory(searchInventory(data, search), sorted);
};
