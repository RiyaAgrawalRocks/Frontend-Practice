function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`
}
let teaOrder = makeTea("lemon tea")
// console.log(makeTea("imarti"));

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`
    }
    return confirmOrder()
}
// console.log(orderTea("masala chai"));


const calculateTotal = (price, quantity) => {
    return price * quantity
}
let totalCost = calculateTotal(10, 5)
// console.log(totalCost);



