function takeOrder(order, emptyArray) {
  if (emptyArray.length >= 3) {
    return emptyArray
  } else {
  emptyArray.push(order)
}
};

function refundOrder(orderNum, neArray) {
  for (var i = 0; i < neArray.length; i++) {
  if (neArray[i].orderNumber === orderNum) {
    neArray.splice(i, 1);
  }
}
};

function listItems(ordersArray) {
  var names = []
  for (var i = 0; i < ordersArray.length; i++) {
  names.push(ordersArray[i].item)
  }
  return names.join(', ');
}


function searchOrder(orderedList, itemName) {
  for (var i = 0; i < orderedList.length; i++) {
    if (itemName === orderedList[i].item) {
      return true;
    }
  }
  return false;
}



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
