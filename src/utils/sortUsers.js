const sortUsers = (data, sort) => {
  if (sort === "") {
    return data;
  }

  let sortedData = [];

  switch (sort) {
    case "first-name-ascending": {
      sortedData = data.sort(function(a, b) {
        if (a.firstName < b.firstName) return -1;
        else if (a.firstName > b.firstName) return 1;
        return 0;
      });
      break;
    }

    case "first-name-descending": {
      sortedData = data.sort(function(a, b) {
        if (a.firstName > b.firstName) return -1;
        else if (a.firstName < b.firstName) return 1;
        return 0;
      });
      break;
    }
    case "last-name-ascending": {
      sortedData = data.sort(function(a, b) {
        if (a.lastName < b.lastName) return -1;
        else if (a.lastName > b.lastName) return 1;
        return 0;
      });
      break;
    }
    case "last-name-descending": {
      sortedData = data.sort(function(a, b) {
        if (a.lastName > b.lastName) return -1;
        else if (a.lastName < b.lastName) return 1;
        return 0;
      });
      break;
    }
    case "status-ascending": {
      sortedData = data.sort(function(a, b) {
        if (a.status < b.status) return -1;
        else if (a.status > b.status) return 1;
        return 0;
      });
      break;
    }
    case "status-descending": {
      sortedData = data.sort(function(a, b) {
        if (a.status > b.status) return -1;
        else if (a.status < b.status) return 1;
        return 0;
      });
      break;
    }
    case "role-ascending": {
      sortedData = data.sort(function(a, b) {
        if (a.role < b.role) return -1;
        else if (a.role > b.role) return 1;
        return 0;
      });
      break;
    }
    case "role-descending": {
      sortedData = data.sort(function(a, b) {
        if (a.role > b.role) return -1;
        else if (a.role < b.role) return 1;
        return 0;
      });
      break;
    }
    default: {
      return data;
    }
  }
  return sortedData;
};

export default sortUsers;
