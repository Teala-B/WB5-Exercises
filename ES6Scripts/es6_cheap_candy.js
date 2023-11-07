
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


let mAndM = products.filter(p => p.product.indexOf("M&M") >= 0)

let hasSwedish = products.findIndex(p => p.product == "Swedish Fish") >= 0


console.log("Candies less tha $4.00 are:");
console.table(valueCandy);

console.log("Procucts with M&Ms are:");
console.table(mAndM);

console.log("Are there Swedish Fish?");
if (hasSwedish) {
    console.log("Yes");
}
else {console.log("No");}
//console.table(swedish);