
function takeOrder(newOrder, deliveryOrders) {

if (deliveryOrders.length < 3) {
  deliveryOrders.push(newOrder)
}
};
//-------------------------------------------------------
// function refundOrder(order, deliveryOrders) {
//
//   for (var i = 0; i < deliveryOrders.length ; i++) {
//
//     if (deliveryOrders[i].orderNumber === order) {
//       deliveryOrders.shift(deliveryOrders)
//     }
//   }
// };

function refundOrder(order, deliveryOrders) {
  var removeOrder = deliveryOrders.splice(order -1, 1);
  return removeOrder
  };
//-------------------------------------------------------
function listItems(deliveryOrders) {
  var newItemList = []

  for (var i = 0; i < deliveryOrders.length; i++) {
    newItemList.push(deliveryOrders[i].item);
    }
      return newItemList.join(', ')
  };
//-------------------------------------------------------

function searchOrder(deliveryOrders,food) {

  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === food) {
      return true
    }
  } return false
};





//---------------------------  ^
// order1.orderNumber
// order2.orderNumber
// order3.orderNumber
// this is the the iteration how the [i] works.



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
