
// Which candies has "M&M" its name?


let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Lolli Pops", price: 5.79},
    {product: "KitKat", price: 3.89},
    {product: "Snickers", price: 3.89},
    {product: "Smarties", price: 1.89},
    {product: "Licories", price: 2.59},
    {product: "Twix", price: 3.59},
];

let valueCandy = products.filter(p => p.price < 4)


// function mAndM(products) {
//     return products.product == "M&M";
// }

let mAndM = products.filter(p => p.product == "M&M")

let swedish = products.find(p => p.product == "Swedish Fish") 


console.log("Candies less tha $4.00 are:");
console.table(valueCandy);

console.log(mAndM);

console.table(swedish);