export const sortUsers = (data, sort) => {
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

export const sortInventory = (data, sort) => {
  if (sort === "") {
    return data;
  }

  let sortedData = [];

  switch (sort) {
    case "name-ascending": {
      sortedData = data.sort(function(a, b) {
        if (a.name < b.name) return -1;
        else if (a.name > b.name) return 1;
        return 0;
      });
      break;
    }

    case "name-descending": {
      sortedData = data.sort(function(a, b) {
        if (a.name > b.name) return -1;
        else if (a.name < b.name) return 1;
        return 0;
      });
      break;
    }
    case "sku-ascending": {
      sortedData = data.sort(function(a, b) {
        if (a.sku < b.sku) return -1;
        else if (a.sku > b.sku) return 1;
        return 0;
      });
      break;
    }

    case "sku-descending": {
      sortedData = data.sort(function(a, b) {
        if (a.sku > b.sku) return -1;
        else if (a.sku < b.sku) return 1;
        return 0;
      });
      break;
    }
    case "supplier-ascending": {
      sortedData = data.sort(function(a, b) {
        if (a.supplier < b.supplier) return -1;
        else if (a.supplier > b.supplier) return 1;
        return 0;
      });
      break;
    }

    case "supplier-descending": {
      sortedData = data.sort(function(a, b) {
        if (a.supplier > b.supplier) return -1;
        else if (a.supplier < b.supplier) return 1;
        return 0;
      });
      break;
    }
    case "price-ascending": {
      sortedData = data.sort(function(a, b) {
        if (a.price < b.price) return -1;
        else if (a.price > b.price) return 1;
        return 0;
      });
      break;
    }
    case "price-descending": {
      sortedData = data.sort(function(a, b) {
        if (a.price > b.price) return -1;
        else if (a.price < b.price) return 1;
        return 0;
      });
      break;
    }
    case "instock-ascending": {
      sortedData = data.sort(function(a, b) {
        if (a.inStock < b.inStock) return -1;
        else if (a.inStock > b.inStock) return 1;
        return 0;
      });
      break;
    }
    case "instock-descending": {
      sortedData = data.sort(function(a, b) {
        if (a.inStock > b.inStock) return -1;
        else if (a.inStock < b.inStock) return 1;
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
    default: {
      return data;
    }
  }
  return sortedData;
};
