let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
];


let itemNames = cart.map(getItemName)
function getItemName(cart) {
    return cart.item
}



let prices = cart.map(getItemPrice)
let total = prices.reduce(sum, 0)
function getItemPrice(cart) {
    return cart.price * cart.quantity
}

function sum(price, currentTotal) {
    return price + currentTotal
}




let itemsortedNames = cart.map(getItemName)
let sorted = itemsortedNames.sort()
function getItemName(cart) {
    return cart.item
}


console.log(itemNames);  
console.log(sorted);
console.log("The total is $" + total);
