const prices = [10, 35, 96, 345, 62]

const new_prices = prices.map(p => {
    return Math.floor(p * .8) - .01
})

console.log(new_prices);

const products = [
    {name: "gold star", price: 20},
    {name: "mushroom", price: 30},
    {name: "green shells", price: 40},
    {name: "banana skin", price: 10},
    {name: "red shells", price: 50}
]

const special_products = products.map(product => {
    if (product.price >= 30) {
        return {name: product.name, price: product.price / 2}
    } else {
        return product
    }
})

console.log(special_products);