var products = [{
        name: "Water Bottle",
        price: 30.00
    },
    {
        name: "Ashwagandha",
        price: 12.00
    }, {
        name: "Samsung S9",
        price: 300.00
    },
];
function calcAverageProductPrice(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total / products.length;
}
console.log(calcAverageProductPrice(products));
var inventory = [
    {
        name: 'motor',
        price: 10.00,
        quantity: 10
    },
    {
        name: 'sensor',
        price: 12.50,
        quantity: 4
    },
    {
        name: 'LED',
        price: 1.00,
        quantity: 20
    },
];
function calcInventoryValue(inventory) {
    var total = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var item = inventory_1[_i];
        total += item.quantity * item.price;
    }
    return total;
}
console.log(calcInventoryValue(inventory));
